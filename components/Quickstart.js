import styles from './quickstart.styles.js';

const QuickStart = () => {
  return(
    <section className="quick-start">
      <h3 className="quick-start__heading">
        Quick <span>Start</span>
      </h3>

      <div className="quick-start__content">
        <div className="quick-start__step">
          <span>Install:</span>
          <code>npm install react-inner-image-zoom</code>
        </div>
        <div className="quick-start__step">
          <span>Style:</span>
          <code>Grab styles.css from <a href="https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.css" target="_blank" rel="noopener noreferrer">Github</a> or import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'</code>
        </div>
        <div className="quick-start__step">
          <span>Import:</span>
          <code>import InnerImageZoom from 'react-inner-image-zoom'</code>
        </div>
        <div className="quick-start__step">
          <span>Render:</span>
          <code>{`<InnerImageZoom src="/path/to/image.jpg" />`}</code>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </section>
  );
};

export default QuickStart;
