import expect, { createSpy } from 'expect';
import React, { Component } from 'react';
import { Simulate, act, findRenderedDOMComponentWithClass, findRenderedDOMComponentWithTag, scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { SRCS } from './constants/srcs';
import InnerImageZoom from 'src/';
import 'src/InnerImageZoom/styles.css';

class Wrapper extends Component {
  render () { 
    return this.props.children;
  }
}

describe('InnerImageZoom', () => {
  let node;
  let component;

  beforeEach(() => {
    node = document.createElement('div');
    document.body.appendChild(node);
  });

  afterEach(() => {
    unmountComponentAtNode(node);
    node.remove();
    node = null;
    component = null;
  });

  const innerImageZoom = (props = {}) => {
    return act(() => {
      component = render(<Wrapper><InnerImageZoom src={SRCS.default} {...props} /></Wrapper>, node);
    });
  }

  describe('mount', () => {
    describe('container', () => {
      it('renders a figure', () => {
        innerImageZoom();
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        expect(figure).toExist();
      });

      it('renders a figure with a custom classname', () => {
        innerImageZoom({ className: 'custom' });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        expect(figure.classList.contains('custom')).toBe(true);
      });
    });

    describe('original image', () => {
      it('renders the original image', () => {
        innerImageZoom();
        const img = findRenderedDOMComponentWithTag(component, 'img');
        expect(img).toExist();
      });

      it('renders the original image with sources', () => {
        innerImageZoom({ sources: SRCS.sources });
        const sources = scryRenderedDOMComponentsWithTag(component, 'source');
        expect(sources.length).toEqual(2);
      });

      it('only renders sources that have srcSet set', () => {
        innerImageZoom({ sources: SRCS.invalidSources });
        const sources = scryRenderedDOMComponentsWithTag(component, 'source');
        expect(sources.length).toEqual(1);
      });
    });
  });

  describe('zoom in', () => {
    describe('render', () => {
      it('renders the zoomed image on mouse enter', () => {
        innerImageZoom();
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.mouseEnter(figure);
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');
        expect(zoomImg).toExist();
      });

      it('renders the zoomed image with unique src if set', () => {
        innerImageZoom({ zoomSrc: SRCS.zoom });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.mouseEnter(figure);
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');
        expect(zoomImg.getAttribute('src')).toEqual('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1000');
      });

      it('renders the zoomed image on render if zoomPreload is true', () => {
        innerImageZoom({ zoomPreload: true });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');
        expect(zoomImg).toExist();
      });
    });

    describe('show', () => {
      it('makes the zoomed image visible on click', (done) => {
        innerImageZoom();
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.mouseEnter(figure);
        Simulate.click(figure, { pageX: 100, pageY: 100 });
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

        zoomImg.onload = () => {
          expect(zoomImg.classList.contains('iiz__zoom-img--visible')).toBe(true);
          done();
        }
      });

      it('makes the zoomed image visible on mouse enter if zoomType hover is set', (done) => {
        innerImageZoom({ zoomType: 'hover' });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.mouseEnter(figure, { pageX: 100, pageY: 100 });
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

        zoomImg.onload = () => {
          expect(zoomImg.classList.contains('iiz__zoom-img--visible')).toBe(true);
          done();
        }
      });

      it('renders the zoomed image in a fullscreen portal if fullscreenOnMobile is set', () => {
        global.innerWidth = 500;
        global.window.matchMedia = () => { return { matches: true }};
        innerImageZoom({ fullscreenOnMobile: true });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.touchStart(figure);
        Simulate.mouseEnter(figure);
        act(() => {
          Simulate.click(figure, { pageX: 100, pageY: 100 });
        });
        const zoomPortal = document.querySelector('.iiz__zoom-portal');
        expect(zoomPortal).toExist();
      });

      it('fires afterZoomIn callback on zoom in', (done) => {
        const afterZoomIn = createSpy();
        innerImageZoom({ afterZoomIn: afterZoomIn });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.mouseEnter(figure);
        Simulate.click(figure, { pageX: 100, pageY: 100 });
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

        zoomImg.onload = () => {
          expect(afterZoomIn).toHaveBeenCalled();
          afterZoomIn.restore();
          done();
        }
      });
    });
  });

  describe('move', () => {
    it('pans the zoomed image on mouse move', (done) => {
      innerImageZoom({ zoomSrc: SRCS.zoomSrc });
      const figure = findRenderedDOMComponentWithTag(component, 'figure');
      Simulate.mouseEnter(figure);
      Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

      zoomImg.onload = () => {
        const topPos = zoomImg.style.top;
        Simulate.mouseMove(figure, { pageX: 150, pageY: 150 });
        const updatedTopPos = zoomImg.style.top;
        expect(parseInt(topPos, 10)).toNotEqual(parseInt(updatedTopPos, 10));
        done();
      }
    });
  });

  describe('zoom out', () => {
    it('hides the zoomed image on toggle click', (done) => {
      innerImageZoom();
      const figure = findRenderedDOMComponentWithTag(component, 'figure');
      Simulate.mouseEnter(figure);
      Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

      zoomImg.onload = () => {
        Simulate.click(figure, { pageX: 100, pageY: 100 });
        expect(zoomImg.classList.contains('iiz__zoom-img--visible')).toBe(false);
        done();
      }
    });

    it('hides the zoomed image on mouse leave', (done) => {
      innerImageZoom();
      const figure = findRenderedDOMComponentWithTag(component, 'figure');
      Simulate.mouseEnter(figure);
      Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

      zoomImg.onload = () => {
        Simulate.mouseLeave(figure);
        expect(zoomImg.classList.contains('iiz__zoom-img--visible')).toBe(false);
        done();
      }
    });

    it('hides the zoomed image on close button click on touch devices', (done) => {
      innerImageZoom();
      const figure = findRenderedDOMComponentWithTag(component, 'figure');
      Simulate.touchStart(figure);
      Simulate.mouseEnter(figure);
      Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

      zoomImg.onload = () => {
        const button = findRenderedDOMComponentWithTag(component, 'button');
        Simulate.click(button, { pageX: 0, pageY: 0 });
        expect(zoomImg.classList.contains('iiz__zoom-img--visible')).toBe(false);
        done();
      }
    });

    it('removes the zoomed image after fade transition', (done) => {
      innerImageZoom();
      const figure = findRenderedDOMComponentWithTag(component, 'figure');
      Simulate.mouseEnter(figure);
      Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

      zoomImg.onload = () => {
        Simulate.mouseLeave(figure);

        setTimeout(() => {
          const img = scryRenderedDOMComponentsWithTag(component, 'img');
          expect(img.length).toBe(1);
          done();
        }, 150);
      }
    });

    it('removes the zoomed image after fade transition on touch devices', (done) => {
      innerImageZoom();
      const figure = findRenderedDOMComponentWithTag(component, 'figure');
      Simulate.touchStart(figure);
      Simulate.mouseEnter(figure);
      Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

      zoomImg.onload = () => {
        const button = findRenderedDOMComponentWithTag(component, 'button');
        Simulate.click(button, { pageX: 0, pageY: 0 });

        setTimeout(() => {
          const img = scryRenderedDOMComponentsWithTag(component, 'img');
          expect(img.length).toBe(1);
          done();
        }, 150);
      }
    });

    it('fires afterZoomOut callback on zoom out', (done) => {
      const afterZoomOut = createSpy();
      innerImageZoom({ afterZoomOut: afterZoomOut });
      const figure = findRenderedDOMComponentWithTag(component, 'figure');
      Simulate.mouseEnter(figure);
      Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');

      zoomImg.onload = () => {
        Simulate.mouseLeave(figure);
        expect(afterZoomOut).toHaveBeenCalled();
        afterZoomOut.restore();
        done();
      }
    });
  });
});