import { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import a11yLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light';
import styles from './demo.styles.js';

SyntaxHighlighter.registerLanguage('javascript', js);

const Demo = ({ children, name, notes, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="demo">
      <div className="demo__main">
        <h3 className="demo__heading">{name}</h3>

        <div className="demo__content">
          <div className="demo__example">{children}</div>

          <div className="demo__notes">
            <h4 className="demo__notes-heading">Notes:</h4>
            <ul className="demo__notes-list">
              {notes.map((note, i) => {
                return(
                  <li key={i} dangerouslySetInnerHTML={{__html: note}}></li>
                );
              })}
            </ul>
            <button
              className="demo__code-btn"
              onClick={() => setShowCode(!showCode)}
              aria-expanded={showCode}
              aria-controls={`${name.replace(/ /g, '')}Code`}
            >
              {showCode ? 'Hide Code -' : 'Show Code +'}
            </button>
          </div>
        </div>
      </div>

      {showCode &&
        <pre className="demo__code" id={`${name.replace(/ /g, '')}Code`}>
          <CopyToClipboard text={code} onCopy={handleCopy}>
            <button className="demo__code-copy demo__code-btn">{`Cop${isCopied ? 'ied!' : 'y'}`}</button>
          </CopyToClipboard>

          <SyntaxHighlighter language="javascript|html" style={a11yLight}>
            {code}
          </SyntaxHighlighter>
        </pre>
      }

      <style jsx>
        {styles}
      </style>
    </div>
  );
}

Demo.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
  notes: PropTypes.array,
  code: PropTypes.string
};

export default Demo;
