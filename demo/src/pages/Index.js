import React, { Fragment } from 'react';
import InnerImageZoom from '../../../src';

const Index = () => {
  return(
    <Fragment>
      <section className="product">
        <div className="product__img">
          <InnerImageZoom src="/unsplash-5.jpg" zoomSrc="/unsplash-5-large.jpg" fullscreenOnMobile={false} />
        </div>

        <div className="product__details">
          <h2>React Inner Image Zoom Component</h2>
          <p>Great for e-commerce product images!</p>
          <p className="product__price">$0</p>
          <a className="product__btn" href="https://github.com/laurenashpole/react-inner-image-zoom">View on Github</a>
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
};

export default Index;