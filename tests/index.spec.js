import expect, { createSpy } from 'expect';
import React from 'react';
import { Simulate, act, findRenderedDOMComponentWithClass, findRenderedDOMComponentWithTag, scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { SRCS } from './constants/srcs';
import InnerImageZoom from 'src/';
import 'src/InnerImageZoom/styles.css';

describe('InnerImageZoom', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
    document.body.appendChild(node);
  });

  afterEach(() => {
    document.body.removeChild(node);
    unmountComponentAtNode(node);
  });

  const innerImageZoom = (props = {}) => {
    return render(<InnerImageZoom src={SRCS.default} {...props} />, node);
  }

  describe('mount', () => {
    describe('container', () => {
      it('renders a figure', () => {
        const component = innerImageZoom();
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        expect(figure).toExist();
      });

      it('renders a figure with a custom classname', () => {
        const component = innerImageZoom({ className: 'custom' });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        expect(figure.classList.contains('custom')).toBe(true);
      });
    });

    describe('original image', () => {
      it('renders the original image', () => {
        const component = innerImageZoom();
        const img = findRenderedDOMComponentWithTag(component, 'img');
        expect(img).toExist();
      });

      it('renders the original image with sources', () => {
        const component = innerImageZoom({ sources: SRCS.sources });
        const sources = scryRenderedDOMComponentsWithTag(component, 'source');
        expect(sources.length).toEqual(2);
      });

      it('only renders sources that have srcSet set', () => {
        const component = innerImageZoom({ sources: SRCS.invalidSources });
        const sources = scryRenderedDOMComponentsWithTag(component, 'source');
        expect(sources.length).toEqual(1);
      });
    });
  });

  describe('zoom in', () => {
    describe('render', () => {
      it('renders the zoomed image on mouse enter', () => {
        const component = innerImageZoom();
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.mouseEnter(figure);
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');
        expect(zoomImg).toExist();
      });

      it('renders the zoomed image with unique src if set', () => {
        const component = innerImageZoom({ zoomSrc: SRCS.zoom });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.mouseEnter(figure);
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');
        expect(zoomImg.getAttribute('src')).toEqual('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1000');
      });

      it('renders the zoomed image on render if startsActive is true', () => {
        const component = innerImageZoom({ startsActive: true });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        const zoomImg = findRenderedDOMComponentWithClass(component, 'iiz__zoom-img');
        expect(zoomImg).toExist();
      });
    });

    describe('show', () => {
      it('makes the zoomed image visible on click', (done) => {
        const component = innerImageZoom();
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
        const component = innerImageZoom({ zoomType: 'hover' });
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
        const component = innerImageZoom({ fullscreenOnMobile: true });
        const figure = findRenderedDOMComponentWithTag(component, 'figure');
        Simulate.touchStart(figure);
        Simulate.mouseEnter(figure);
        Simulate.click(figure, { pageX: 100, pageY: 100 });
        const zoomPortal = document.querySelector('.iiz__zoom-portal');
        expect(zoomPortal).toExist();
      });

      it('fires afterZoomIn callback on zoom in', (done) => {
        const afterZoomIn = createSpy();
        const component = innerImageZoom({ afterZoomIn: afterZoomIn });
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
      const component = innerImageZoom({ zoomSrc: SRCS.zoomSrc });
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
      const component = innerImageZoom();
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
      const component = innerImageZoom();
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
      const component = innerImageZoom();
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
      const component = innerImageZoom();
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
      const component = innerImageZoom();
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
      const component = innerImageZoom({ afterZoomOut: afterZoomOut });
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