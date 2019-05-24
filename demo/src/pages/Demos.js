import React from 'react';
import Slick from 'react-slick';
import ThumbnailGallery from '../components/ThumbnailGallery';
import InnerImageZoom from '../../../src';
import '../stylesheets/demos.css';
import '../stylesheets/slick.css';
import '../stylesheets/slick-theme.css';

const Demos = () => {
  return(
    <div>
      <h2 className="heading--offset">Demos</h2>

      <div className="demo">
        <h3 className="demo__heading">With Thumbnail Gallery</h3>

        <div className="demo__content">
          <div className="demo__example">
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
          </div>

          <div className="demo__details">
            <h4 class="demo__notes-heading">Notes:</h4>
          </div>
        </div>
      </div>

      <div className="demo">
        <h3 className="demo__heading">With Slick Carousel</h3>

        <div className="demo__content">
          <div className="demo__example">
            <Slick dots={true}>
              <InnerImageZoom src="/unsplash-1.jpg" zoomSrc="/unsplash-1-large.jpg" fullscreenOnMobile={true} />
              <InnerImageZoom src="/unsplash-2.jpg" zoomSrc="/unsplash-2-large.jpg" fullscreenOnMobile={true} />
              <InnerImageZoom src="/unsplash-3.jpg" zoomSrc="/unsplash-3-large.jpg" fullscreenOnMobile={true} />
            </Slick>
          </div>

          <div className="demo__notes">
            <h4 className="demo__notes-heading">Notes:</h4>
            <ul className="demo__notes-list">
              <li>Integration with <a href="https://github.com/akiran/react-slick" target="_blank">React Slick.</a></li>
              <li>Recommend enabling fullscreenOnMobile to avoid swiping conflicts.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;