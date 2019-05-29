import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class FullscreenPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add(props.className);
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return createPortal(
      this.props.children,
      this.el
    );
  }
}

FullscreenPortal.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
};

export default FullscreenPortal;