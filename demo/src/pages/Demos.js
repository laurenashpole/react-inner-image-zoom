import React from 'react';
import Slick from 'react-slick';
import Demo from '../components/Demo';
import ThumbnailGallery from '../components/ThumbnailGallery';
import InnerImageZoom from '../../../src';
import '../stylesheets/demos.css';
import '../stylesheets/slick.css';
import '../stylesheets/slick-theme.css';

const Demos = () => {
  return(
    <div>
      <h2 className="demos__heading">Demos</h2>

      <nav className="demos__nav">
        <span>jump to:</span>
        <a href="#basic">Basic</a>
        <a href="#fullscreen">Fullscreen On Mobile</a>
        <a href="#responsive">Responsive Images</a>
        <a href="#slick">With Slick Carousel</a>
      </nav>

      <section id="basic">
        <Demo name="Basic" notes={['Simplest use case with only src prop set', 'Photo credit: <a href="https://unsplash.com/photos/Kx8DDqb6Wbw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Toa Heftiba</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>']} code={`<InnerImageZoom src="/path/to/image.jpg" />`}>
          <InnerImageZoom src="/unsplash-6.jpg" />
        </Demo>
      </section>

      <section id="fullscreen">
        <Demo name="Fullscreen On Mobile" notes={['Zoomed image is fullscreen on touch devices below a specified breakpoint', 'Photo credit: <a href="https://unsplash.com/photos/1DMNn6gBbwQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Gabrielle Henderson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>']} code={`<InnerImageZoom\n\xa0\xa0src="/path/to/image.jpg"\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n\xa0\xa0fullscreenOnMobile={true}\n/>`}>
          <InnerImageZoom src="/unsplash-8.jpg" zoomSrc="/unsplash-8-large.jpg" fullscreenOnMobile={true} />
        </Demo>
      </section>

      <section id="responsive">
        <Demo name="Responsive Images" notes={['Accepts default srcset and sources (with srcset, media, type)', 'Use with <a href="https://github.com/scottjehl/picturefill" target="_blank">Picturefill</a> for older browser support', 'Photo credit: <a href="https://unsplash.com/photos/eQ2PUDrwSx0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Brittany Neale</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>']} code={`<InnerImageZoom\n\xa0\xa0src="/path/to/default-image.jpg"\n\xa0\xa0srcSet="/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x"\n\xa0\xa0sources={[{\n\xa0\xa0\xa0\xa0srcSet='/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x',\n\xa0\xa0\xa0\xa0media: '(min-width: 768px)'\n\xa0\xa0}]}\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n/>`}>
          <InnerImageZoom
            src="/unsplash-4.jpg"
            srcSet="/unsplash-4-305.jpg, /unsplash-4-610.jpg 2x"
            sources={[{
              srcSet: '/unsplash-4-740.jpg, /unsplash-4-1480.jpg 2x',
              media: '(min-width: 375px)'
            }]}
            zoomSrc="/unsplash-4-large.jpg"
          />
        </Demo>
      </section>

      <section id="slick">
        <Demo name="With Slick Carousel" notes={['Integration with <a href="https://github.com/akiran/react-slick" target="_blank">React Slick</a>', 'Recommend using with fullscreenOnMobile', 'Photo credits: <a href="https://unsplash.com/photos/zbPDL84kvRg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Martin Adams</a>, <a href="https://unsplash.com/photos/Nv4QHkTVEaI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Nordwood Themes</a>, and <a href="https://unsplash.com/photos/ZLRRiyrmALA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Jordan Madrid</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>']} code={`<Slick dots={true}>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-1.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-1-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-2.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-2-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-3.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-3-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n</Slick>`}>
          <Slick dots={true}>
            <InnerImageZoom src="/unsplash-7.jpg" zoomSrc="/unsplash-7-large.jpg" fullscreenOnMobile={true} />
            <InnerImageZoom src="/unsplash-3.jpg" zoomSrc="/unsplash-3-large.jpg" fullscreenOnMobile={true} />
            <InnerImageZoom src="/unsplash-2.jpg" zoomSrc="/unsplash-2-large.jpg" fullscreenOnMobile={true} />
          </Slick>
        </Demo>
      </section>

{/*      <div className="demo">
        <h3 className="demo__heading">Dynamic Images</h3>

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
      </div>*/}
    </div>
  );
};

export default Demos;