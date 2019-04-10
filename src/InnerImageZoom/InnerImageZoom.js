import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class InnerImageZoom extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isActive: false,
      isZoomed: false,
      left: 0,
      top: 0
    };
  }

  handleMouseEnter = () => {
    this.setState({
      isActive: true
    });
  }

  handleClick = (e) => {
    const wasZoomed = this.state.isZoomed;

    if (wasZoomed) {
      this.zoomOut();
    } else {
      this.offset = this.img.getBoundingClientRect();

      if (this.imgData) {
        this.zoomIn(e.pageX, e.pageY);
      } else {
        this.onLoadCallback = this.zoomIn.bind(this, e.pageX, e.pageY);
      }
    }
  }

  handleMouseMove = (pageX, pageY) => {
    let left = pageX - this.offset.left;
    let top = pageY - this.offset.top;

    left = Math.max(Math.min(left, this.img.offsetWidth), 0);
    top = Math.max(Math.min(top, this.img.offsetHeight), 0);

    this.setState({
      left: left * -this.imgData.xRatio,
      top: top * -this.imgData.yRatio
    });
  }

  handleLoad = (e) => {
    this.imgData = {
      xRatio: (e.target.offsetWidth - this.img.offsetWidth) / this.img.offsetWidth,
      yRatio: (e.target.offsetHeight - this.img.offsetHeight) / this.img.offsetHeight
    };

    if (this.onLoadCallback) {
      this.onLoadCallback();
      this.onLoadCallback = null;
    }
  }

  handleClose = () => {
    this.zoomOut(() => {
      // TODO: Switch to transitionend listener to account for custom styling
      setTimeout(() => {
        this.imgData = null;

        this.setState({
          isActive: false
        })
      }, 120);
    });
  }

  zoomIn = (pageX, pageY) => {
    this.handleMouseMove(pageX, pageY);

    this.setState({
      isZoomed: true
    }, () => {
      if (this.props.onZoomIn) {
        this.props.onZoomIn();
      }
    });
  }

  zoomOut = (callback) => {
    this.setState({
      isZoomed: false
    }, () => {
      if (this.props.onZoomOut) {
        this.props.onZoomOut();
      }

      if (callback) {
        callback();
      }
    });
  }

  render () {
    return(
      <figure
        className="iiz"
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.state.isZoomed ? (e) => { this.handleMouseMove(e.pageX, e.pageY); } : null}
        onMouseLeave={this.handleClose}
        onClick={this.handleClick}
      >
        <img className="iiz__img" src={this.props.src} ref={(el) => { this.img = el; }} />

        {this.state.isActive &&
          <img className={`iiz__zoom-img ${this.state.isZoomed ? 'iiz__zoom-img--visible' : ''}`} src={this.props.zoomSrc} onLoad={this.handleLoad} style={{top: this.state.top, left: this.state.left}} />
        }
      </figure>
    );
  }
}

InnerImageZoom.propTypes = {
  src: PropTypes.string,
  zoomSrc: PropTypes.string,
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func
};

export default InnerImageZoom;