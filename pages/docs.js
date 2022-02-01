import Layout from '../components/Layout';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import a11yLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light';
import styles from './Docs.module.css';

SyntaxHighlighter.registerLanguage('javascript', js);

const Docs = () => {
  return (
    <Layout title="Docs">
      <div className={styles.container}>
        <h2 className={styles.heading}>Docs</h2>

        <nav className={styles.nav} aria-label="Topics">
          <a href="#installation">Installation</a>
          <a href="#styling">Styling</a>
          <a href="#usage">Usage</a>
          <a href="#props">Props</a>
        </nav>

        <section className={styles.content}>
          <div>
            <h3 id="installation">Installation</h3>
            <p><b>Note:</b> Version 2.0.0 introduces React hooks and requires React v16.8.0 or above. To use this package with older versions of React, install with <code className={styles.inlineCode}>npm install react-inner-image-zoom@1.3.0</code> or <code className={styles.inlineCode}>yarn add react-inner-image-zoom@1.3.0</code> instead of the instructions below.</p>
            <h4>NPM</h4>
            <pre className={styles.code}><code>npm install react-inner-image-zoom</code></pre>
            <h4>Yarn</h4>
            <pre className={styles.code}><code>yarn add react-inner-image-zoom</code></pre>
            <h4>TypeScript</h4>
            <p>For TypeScript users, type definitions are available through DefinitelyTyped and can be installed with:</p>
            <pre className={styles.code}><code>npm install --save-dev @types/react-inner-image-zoom</code></pre>
          </div>

          <div>
            <h3 id="styling">Styling</h3>
            <h4>Download</h4>
            <p>Grab the raw CSS from Github to use however you see fit:</p>
            <p><a href="https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.css" target="_blank" rel="noopener noreferrer">styles.css</a></p>
            <p>or the minified version:</p>
            <p><a href="https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.min.css" target="_blank" rel="noopener noreferrer">styles.min.css</a></p>
            <h4>Import</h4>
            <p>If your setup supports it, import the CSS directly from your node_modules:</p>
            <SyntaxHighlighter language="javascript|html" style={a11yLight} customStyle={{ margin: 0, padding: '1.5rem', background: '#f2f3f7', borderRadius: '1px' }}>
              import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
            </SyntaxHighlighter>
            <p>or the minified version:</p>
            <SyntaxHighlighter language="javascript|html" style={a11yLight} customStyle={{ margin: 0, padding: '1.5rem', background: '#f2f3f7', borderRadius: '1px' }}>
              import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
            </SyntaxHighlighter>
          </div>

          <div>
            <h3 id="usage">Usage</h3>
            <p>Import and render the component:</p>
            <SyntaxHighlighter language="javascript|html" style={a11yLight} customStyle={{ margin: 0, padding: '1.5rem', background: '#f2f3f7', borderRadius: '1px' }}>
              {`import InnerImageZoom from 'react-inner-image-zoom';\n\n...\n\n<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h3 id="props">Props</h3>

            <ul className={styles.propsList}>
              <li><b>src (String): </b>Required. URL for the original image.</li>
              <li><b>sources (Array): </b>A list of image sources for using the picture tag to serve the appropriate original image (see below for more details).</li>
              <li><b>width (Number): </b>Width attribute for original image.</li>
              <li><b>height (Number): </b>Height attribute for original image.</li>
              <li><b>hasSpacer (Boolean): </b>Default false. If true, gets the original image's aspect ratio based on the width and height props and creates a spacer to prevent cumulative layout shift.</li>
              <li><b>imgAttributes (Object): </b><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank" rel="noopener noreferrer">Img</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes" target="_blank" rel="noopener noreferrer">global</a> attributes for the original image (excluding <code className={styles.inlineCode}>src</code>, <code className={styles.inlineCode}>width</code>, <code className={styles.inlineCode}>height</code>, and <code className={styles.inlineCode}>style</code> which are set elsewhere). The imgAttributes keys should follow the <a href="https://reactjs.org/docs/dom-elements.html" target="_blank" rel="noopener noreferrer">React DOM element</a> naming conventions.</li>
              <li><b>zoomSrc (String): </b>URL for the larger zoom image. Falls back to original image src if not defined.</li>
              <li><b>zoomScale (Number): </b>Default 1. Multiplied against the natural width and height of the zoomed image. This will generally be a decimal (example, 0.9 for 90%).</li>
              <li><b>zoomPreload (Boolean): </b>Default false If set to true, preloads the zoom image instead of waiting for mouseenter and (unless on a touch device) persists the image on mouseleave.</li>
              <li><b>moveType (String): </b>Default pan. Accepts pan or drag options. The user behavior for moving zoomed images on non-touch devices.</li>
              <li><b>zoomType (String): </b>Default click. Accepts click or hover options. The user behavior for triggering zoom. When using hover, combine with zoomPreload to avoid flickering on rapid mouse movements.</li>
              <li><b>fadeDuration (Number): </b>Default 150. Fade transition time in milliseconds. If zooming in on transparent images, set this to 0 for best results.</li>
              <li><b>fullscreenOnMobile (Boolean): </b>Default false. Enables fullscreen zoomed image on touch devices below a specified breakpoint.</li>
              <li><b>mobileBreakpoint (Number): </b>Default 640. The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true.</li>
              <li><b>hideCloseButton (Boolean): </b>Default false. Hides the close button on touch devices. If set to true, zoom out is triggered by tap.</li>
              <li><b>hideHint (Boolean): </b>Default false. Hides the magnifying glass hint.</li>
              <li><b>className (String): </b>Custom classname for styling the component.</li>
              <li><b>afterZoomIn (Function): </b>Function to be called after zoom in.</li>
              <li><b>afterZoomOut (Function): </b>Function to be called after zoom out.</li>
            </ul>

            <h4>Sources</h4>
            <p>This prop accepts an array of objects which it uses to create a picture tag and source elements. The component looks for the following optional properties and you can find additional details <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">here</a>: </p>

            <ul className={styles.propsList}>
              <li><b>srcSet (String): </b>Srcset attribute for source tag.</li>
              <li><b>sizes (String): </b>Sizes attribute for source tag.</li>
              <li><b>media (String): </b>An attribute containing a media condition for use with the srcset.</li>
              <li><b>type (String): </b>An image MIME type. This is useful for using newer formats like WebP.</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Docs;
