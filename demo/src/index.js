import React, { Component } from 'react';
import { render } from 'react-dom';
import InnerImageZoom from '../../src';
import '../../src/InnerImageZoom/styles.css';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-inner-image-zoom Demo</h1>
        <div style={{ marginBottom: '30px' }}>
          <h2>Pan Example</h2>
          <InnerImageZoom
            src="unsplash.jpg"
            zoomSrc="unsplash-large.jpg"
            fullscreenOnMobile={true}
            zoomPreload={true}
            width={750}
            height={500}
            hasSpacer={true}
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h2>Hover Example</h2>
          <InnerImageZoom src="unsplash2.jpg" zoomSrc="unsplash2-large.jpg" zoomType="hover" zoomPreload={true} />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h2>Drag Example</h2>
          <InnerImageZoom
            src="unsplash3.jpg"
            zoomSrc="unsplash3-large.jpg"
            fullscreenOnMobile={true}
            moveType="drag"
            zoomScale={0.9}
          />
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
