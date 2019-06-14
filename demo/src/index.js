import React, { Component } from 'react';
import { render } from 'react-dom';
import InnerImageZoom from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-inner-image-zoom Demo</h1>
        <InnerImageZoom src="unsplash.jpg" zoomSrc="unsplash-large.jpg" fullscreenOnMobile={true} />
      </div>
    );
  }
}

render(
  <Demo />,
  document.querySelector('#demo')
);