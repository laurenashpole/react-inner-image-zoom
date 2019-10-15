import expect from 'expect'
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { TEST_PROPS } from './constants';
import InnerImageZoom from 'src/';
import 'src/InnerImageZoom/styles.css';

describe('InnerImageZoom', () => {
  let node;
  let src = TEST_PROPS.src;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  const innerImageZoom = (props = {}) => {
    return render(<InnerImageZoom src={src} {...props} />, node);
  }

  describe('mount', () => {
    describe('container', () => {
      it('renders a figure', () => {
        const component = innerImageZoom();
        const figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');

        expect(figure).toExist();
      });

      it('renders a figure with a custom classname', () => {
        const component = innerImageZoom({ className: TEST_PROPS.className });
        const figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');
        const hasClass = figure.classList.contains('custom');

        expect(hasClass).toBe(true);
      });
    });

    describe('original image', () => {
      it('renders the original image', () => {
        const component = innerImageZoom();
        const img = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'iiz__img');

        expect(img).toExist();
      });

      it('renders the original image with sources', () => {
        const component = innerImageZoom({ sources: TEST_PROPS.sources });
        const sources = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'source');

        expect(sources.length).toEqual(2);
      });

      it('only renders sources that have srcSet set', () => {
        const component = innerImageZoom({ sources: TEST_PROPS.invalidSources });
        const sources = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'source');

        expect(sources.length).toEqual(1);
      });
    });
  });

  describe('zoom in', () => {
    describe('render', () => {
      it('renders the zoomed image on mouse enter', () => {
        const component = innerImageZoom();
        const figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');
        ReactTestUtils.Simulate.mouseEnter(figure);
        const zoomImg = figure.querySelector('.iiz__zoom-img');

        expect(zoomImg).toExist();
      });

      it('renders the zoomed image with unique src if set', () => {
        const component = innerImageZoom({ zoomSrc: TEST_PROPS.zoomSrc });
        const figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');
        ReactTestUtils.Simulate.mouseEnter(figure);
        const zoomImg = figure.querySelector('.iiz__zoom-img');
        const src = zoomImg.getAttribute('src');

        expect(src).toEqual('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?fit=crop&w=1000');
      });
    });

    describe('show', () => {
      beforeEach(() => {
        document.body.appendChild(node);
      });

      afterEach(() => {
        document.body.removeChild(node);
      });

      it('makes the zoomed image visible on click', (done) => {
        const component = innerImageZoom();
        const figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');
        ReactTestUtils.Simulate.mouseEnter(figure);
        ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
        const zoomImg = figure.querySelector('.iiz__zoom-img');

        zoomImg.onload = () => {
          const visibleZoomImg = figure.querySelector('.iiz__zoom-img--visible');

          expect(visibleZoomImg).toExist();
          done();
        }
      });

      it('renders the zoomed image in a fullscreen portal if fullscreenOnMobile is set', () => {
        global.innerWidth = 500;
        global.window.matchMedia = () => { return { matches: true }};
        const component = innerImageZoom({ fullscreenOnMobile: true });
        const figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');
        ReactTestUtils.Simulate.touchStart(figure);
        ReactTestUtils.Simulate.mouseEnter(figure);
        ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
        const zoomPortal = document.querySelector('.iiz__zoom-portal');

        expect(zoomPortal).toExist();
      });
    });
  });

  describe('move', () => {
    let figure = null;
    let zoomImg = null;

    beforeEach(() => {
      document.body.appendChild(node);
      const component = innerImageZoom({ zoomSrc: TEST_PROPS.zoomSrc });
      figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');
      zoomImg = figure.querySelector('.iiz__zoom-img');
    });

    afterEach(() => {
      document.body.removeChild(node);
    });

    it('pans the zoomed image on mouse move', (done) => {
      ReactTestUtils.Simulate.mouseEnter(figure);
      ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
      const zoomImg = figure.querySelector('.iiz__zoom-img');

      zoomImg.onload = () => {
        const topPos = zoomImg.style.top;
        ReactTestUtils.Simulate.mouseMove(figure, { pageX: 150, pageY: 150 });
        const updatedTopPos = zoomImg.style.top;

        expect(parseInt(topPos, 10)).toNotEqual(parseInt(updatedTopPos, 10));
        done();
      }
    });
  });

  describe('zoom out', () => {
    let figure = null;

    beforeEach(() => {
      document.body.appendChild(node);
      const component = innerImageZoom();
      figure = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'figure');
    });

    afterEach(() => {
      document.body.removeChild(node);
    });

    it('hides the zoomed image on toggle click', () => {
      ReactTestUtils.Simulate.mouseEnter(figure);
      ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
      ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
      const visibleZoomImg = figure.querySelector('.iiz__zoom-img--visible');

      expect(visibleZoomImg).toBe(null);
    });

    it('hides the zoomed image on mouse leave', () => {
      ReactTestUtils.Simulate.mouseEnter(figure);
      ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
      ReactTestUtils.Simulate.mouseLeave(figure);
      const visibleZoomImg = figure.querySelector('.iiz__zoom-img--visible');

      expect(visibleZoomImg).toBe(null);
    });

    it('hides the zoomed image on close button click on touch devices', (done) => {
      ReactTestUtils.Simulate.touchStart(figure);
      ReactTestUtils.Simulate.mouseEnter(figure);
      ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
      const closeButton = figure.querySelector('.iiz__close');
      ReactTestUtils.Simulate.click(closeButton, { pageX: 0, pageY: 0 });
      const visibleZoomImg = figure.querySelector('.iiz__zoom-img--visible');

      setTimeout(() => {
        expect(visibleZoomImg).toBe(null);
        done();
      }, 150);
    });

    it('removes the zoomed image after fade transition', (done) => {
      ReactTestUtils.Simulate.mouseEnter(figure);
      ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
      ReactTestUtils.Simulate.mouseLeave(figure);

      setTimeout(() => {
        const zoomImg = figure.querySelector('.iiz__zoom-img');

        expect(zoomImg).toBe(null);
        done();
      }, 150);
    });

    it('removes the zoomed image after fade transition on touch devices', (done) => {
      ReactTestUtils.Simulate.touchStart(figure);
      ReactTestUtils.Simulate.mouseEnter(figure);
      ReactTestUtils.Simulate.click(figure, { pageX: 100, pageY: 100 });
      const closeButton = figure.querySelector('.iiz__close');
      ReactTestUtils.Simulate.click(closeButton, { pageX: 0, pageY: 0 });

      setTimeout(() => {
        const zoomImg = figure.querySelector('.iiz__zoom-img');

        expect(zoomImg).toBe(null);
        done();
      }, 150);
    });
  });
});