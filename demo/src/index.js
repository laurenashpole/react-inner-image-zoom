import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import InnerImageZoom from '../../src';
import ThumbnailGallery from './components/ThumbnailGallery';
import './styles.css';

class Demo extends Component {
  render() {
    return (
      <Fragment>
        <nav className="nav">
          <ul className="nav__list nav__list--secondary">
            <li className="nav__item"><a href="#">Github</a></li>
            <li className="nav__item"><a href="#">NPM</a></li>
          </ul>

          <ul className="nav__list nav__list--primary">
            <li className="nav__item nav__item--left"><a href="#">Inner Image Zoom</a></li>
            <li className="nav__item"><a href="#">Demos</a></li>
            <li className="nav__item"><a href="#">Docs</a></li>
            <li className="nav__item"><a href="#">Support</a></li>
          </ul>
        </nav>

        <section className="container product">
          <div className="product__img">
            <InnerImageZoom src="/unsplash-5.jpg" zoomSrc="/unsplash-5-large.jpg" fullscreenOnMobile={false} />
          </div>
          <div className="product__details">
            <h2>React Inner Image Zoom Component</h2>
            <p>Great for e-commerce product images!</p>
            <p className="product__price">$0</p>
            <a className="product__btn" href="#">View on Github</a>
            <ul className="product__list">
              <li>Details</li>
              <li>Zoom + pan on hover and zoom + drag on touch.</li>
              <li>Can be used with other popular React components.</li>
              <li>Demo image from Unsplash.</li>
            </ul>
          </div>
        </section>

        <section className="container">
          <div className="usage">
            <h3>Basic Usage</h3>
            <p>npm install react-inner-image-zoom</p>
            <p>import InnerImageZoom from 'react-inner-image-zoom'</p>
            <p>{`<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />`}</p>
          </div>
        </section>
      </Fragment>
    );
  }
}

render(
  <Demo />,
  document.querySelector('#demo')
);