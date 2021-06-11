import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import a11yLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light';
import styles from './quickstart.styles.js';

SyntaxHighlighter.registerLanguage('javascript', js);

const QuickStart = () => {
  return(
    <section className="quick-start">
      <h3 className="quick-start__heading">
        Quick <span>Start</span>
      </h3>

      <div className="quick-start__content">
        <div className="quick-start__step">
          <span>Install:</span>
          <div className="quick-start__code">npm install react-inner-image-zoom</div>
        </div>
        <div className="quick-start__step">
          <span>Style:</span>
          <div className="quick-start__code">Grab styles.css from <a href="https://raw.githubusercontent.com/laurenashpole/react-inner-image-zoom/master/src/InnerImageZoom/styles.css" target="_blank" rel="noopener noreferrer">Github</a> or <SyntaxHighlighter language="javascript|html" style={a11yLight} customStyle={{ margin: 0, padding: 0 }} wrapLongLines={true}>import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'</SyntaxHighlighter></div>
        </div>
        <div className="quick-start__step">
          <span>Import:</span>
          <div className="quick-start__code"><SyntaxHighlighter language="javascript|html" style={a11yLight} customStyle={{ margin: 0, padding: 0 }} wrapLongLines={true}>import InnerImageZoom from 'react-inner-image-zoom'</SyntaxHighlighter></div>
        </div>
        <div className="quick-start__step">
          <span>Render:</span>
          <div className="quick-start__code"><SyntaxHighlighter language="javascript|html" style={a11yLight} customStyle={{ margin: 0, padding: 0 }} wrapLongLines={true}>{`<InnerImageZoom src="/path/to/image.jpg" />`}</SyntaxHighlighter></div>
        </div>
      </div>

      <style jsx>
        {styles}
      </style>
    </section>
  );
};

export default QuickStart;
