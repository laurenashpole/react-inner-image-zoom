import React from 'react';
import ThumbnailGallery from '../components/ThumbnailGallery';

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
    </div>
  );
};

export default Demos;