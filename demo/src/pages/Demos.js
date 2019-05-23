import React from 'react';
import Slick from 'react-slick';
import ThumbnailGallery from '../components/ThumbnailGallery';
import InnerImageZoom from '../../../src';
import '../stylesheets/slick.css';
import '../stylesheets/slick-theme.css';

const Demos = () => {
  return(
    <div>
      <h1>Demos</h1>

      <div>
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

      <div>
        <Slick>
          <InnerImageZoom src="/unsplash-1.jpg" zoomSrc="/unsplash-1-large.jpg" fullscreenOnMobile={true} />
          <InnerImageZoom src="/unsplash-2.jpg" zoomSrc="/unsplash-2-large.jpg" fullscreenOnMobile={true} />
          <InnerImageZoom src="/unsplash-3.jpg" zoomSrc="/unsplash-3-large.jpg" fullscreenOnMobile={true} />
        </Slick>
      </div>
    </div>
  );
};

export default Demos;