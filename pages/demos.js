import LazyLoad from 'react-lazy-load';
import Slick from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import Layout from '../components/Layout';
import Demo from '../components/Demo';
import styles from './Demos.module.css';
import slickStyles from '../components/slick.styles.js';

const Demos = () => {
  return (
    <Layout title="Demos">
      <div className={styles.container}>
        <h2 className={styles.heading}>Demos</h2>

        <nav className={styles.nav}>
          <span>jump to:</span>
          <a href="#basic">Basic</a>
          <a href="#dragToMove">Drag To Move</a>
          <a href="#zoomOnHover">Zoom On Hover</a>
          <a href="#fullscreen">Fullscreen On Mobile</a>
          <a href="#responsive">Responsive Images</a>
          <a href="#lazyload">With React Lazy Load</a>
          <a href="#slick">With Slick Carousel</a>
        </nav>

        <section id="basic">
          <Demo name="Basic" notes={['Simplest use case with only src prop set', 'Photo credit: <a href="https://unsplash.com/photos/Kx8DDqb6Wbw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Toa Heftiba</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<InnerImageZoom src="/path/to/image.jpg" />`}>
            <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-2.jpg" />
          </Demo>
        </section>

        <section id="dragToMove">
          <Demo name="Drag To Move" notes={['Drag to explore zoomed image on non-touch devices', 'Click to zoom out', 'Photo credit: <a href="https://unsplash.com/@curology?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Curology</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" moveType="drag" />`}>
            <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-9.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-9-large.jpg" moveType="drag" />
          </Demo>
        </section>

        <section id="zoomOnHover">
          <Demo name="Zoom On Hover" notes={['Trigger image zoom on hover.', 'Photo credit: <a href="https://unsplash.com/@socialcut?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">S O C I A L . C U T</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" zoomType="hover" />`}>
            <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-10.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-10-large.jpg" zoomType="hover" />
          </Demo>
        </section>

        <section id="fullscreen">
          <Demo name="Fullscreen On Mobile" notes={['Zoomed image is fullscreen on touch devices below a specified breakpoint', 'Photo credit: <a href="https://unsplash.com/photos/1DMNn6gBbwQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Gabrielle Henderson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<InnerImageZoom\n\xa0\xa0src="/path/to/image.jpg"\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n\xa0\xa0fullscreenOnMobile={true}\n/>`}>
            <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-3.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-3-large.jpg" fullscreenOnMobile={true} />
          </Demo>
        </section>

        <section id="responsive">
          <Demo name="Responsive Images" notes={['Accepts default srcset and sources (with srcset, media, type)', 'Use with <a href="https://github.com/scottjehl/picturefill" target="_blank" rel="noopener noreferrer">Picturefill</a> for older browser support', 'Photo credit: <a href="https://unsplash.com/photos/eQ2PUDrwSx0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Brittany Neale</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<InnerImageZoom\n\xa0\xa0src="/path/to/default-image.jpg"\n\xa0\xa0srcSet="/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x"\n\xa0\xa0sources={[{\n\xa0\xa0\xa0\xa0srcSet='/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x',\n\xa0\xa0\xa0\xa0media: '(min-width: 768px)'\n\xa0\xa0}]}\n\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n/>`}>
            <InnerImageZoom
              src="/react-inner-image-zoom/images/unsplash-4.jpg"
              srcSet="/react-inner-image-zoom/images/unsplash-4-305.jpg, /react-inner-image-zoom/images/unsplash-4-610.jpg 2x"
              sources={[{
                srcSet: '/react-inner-image-zoom/images/unsplash-4-740.jpg, /react-inner-image-zoom/images/unsplash-4-1480.jpg 2x',
                media: '(min-width: 375px)'
              }]}
              zoomSrc="/react-inner-image-zoom/images/unsplash-4-large.jpg"
            />
          </Demo>
        </section>

        <section id="lazyload">
          <Demo name="With React Lazy Load" notes={['Integration with <a href="https://github.com/loktar00/react-lazy-load" target="_blank" rel="noopener noreferrer">React Lazy Load</a>', 'Photo credit: <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jay Wennington</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<LazyLoad>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/zoom-image.jpg"\n\xa0\xa0/>\n</LazyLoad>`}>
            <LazyLoad>
              <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-8.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-8-large.jpg" />
            </LazyLoad>
          </Demo>
        </section>

        <section id="slick">
          <Demo name="With Slick Carousel" notes={['Integration with <a href="https://github.com/akiran/react-slick" target="_blank" rel="noopener noreferrer">React Slick</a>', 'Recommend using with fullscreenOnMobile', 'Photo credits: <a href="https://unsplash.com/photos/zbPDL84kvRg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Martin Adams</a>, <a href="https://unsplash.com/photos/Nv4QHkTVEaI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Nordwood Themes</a>, and <a href="https://unsplash.com/photos/ZLRRiyrmALA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jordan Madrid</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>']} code={`<Slick dots={true}>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-1.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-1-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-2.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-2-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n\xa0\xa0<InnerImageZoom\n\xa0\xa0\xa0\xa0src="/path/to/image-3.jpg"\n\xa0\xa0\xa0\xa0zoomSrc="/path/to/image-3-large.jpg"\n\xa0\xa0\xa0\xa0fullscreenOnMobile={true}\n\xa0\xa0/>\n</Slick>`}>
            <Slick dots={true}>
              <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-5.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-5-large.jpg" fullscreenOnMobile={true} />
              <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-6.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-6-large.jpg" fullscreenOnMobile={true} />
              <InnerImageZoom src="/react-inner-image-zoom/images/unsplash-7.jpg" zoomSrc="/react-inner-image-zoom/images/unsplash-7-large.jpg" fullscreenOnMobile={true} />
            </Slick>
          </Demo>
        </section>
      </div>

      <style jsx global>
        {slickStyles}
      </style>
    </Layout>
  );
};

export default Demos;
