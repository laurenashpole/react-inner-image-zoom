import React, { Component } from 'react';
import { render } from 'react-dom';
import InnerImageZoom from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-inner-image-zoom Demo</h1>
        <InnerImageZoom src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" zoomSrc="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
      </div>
    );
  }
}

render(
  <Demo />,
  document.querySelector('#demo')
);