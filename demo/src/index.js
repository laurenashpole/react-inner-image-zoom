import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import InnerImageZoom from '../../src';
import ThumbnailGallery from './components/ThumbnailGallery';
import './styles.css';

class Demo extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="container">
            <h1>react-inner-image-zoom Demo</h1>
            <p>Some kind of description can go here!</p>
          </div>
        </header>

        <section className="container">
          <InnerImageZoom src="/unsplash-1.jpg" zoomSrc="/unsplash-1-large.jpg" fullscreenOnMobile={false} />
        </section>

        <section className="container">
          <ThumbnailGallery images={[{
            src: '/unsplash-1.jpg',
            zoomSrc: '/unsplash-1-large.jpg'
          }, {
            src: '/unsplash-2.jpg',
            zoomSrc: '/unsplash-2-large.jpg'
          }, {
            src: '/unsplash-3.jpg',
            zoomSrc: '/unsplash-3-large.jpg'
          }, {
            src: '/unsplash-4.jpg',
            zoomSrc: '/unsplash-4-large.jpg'
          }]} />
        </section>
      </Fragment>
    );
  }
}

render(
  <Demo />,
  document.querySelector('#demo')
);