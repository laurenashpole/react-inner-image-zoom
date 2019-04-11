import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class InnerImageZoom extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isActive: false,
      isTouch: false,
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
      this.offset = this.el.getBoundingClientRect();

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

    left = Math.max(Math.min(left, this.el.offsetWidth), 0);
    top = Math.max(Math.min(top, this.el.offsetHeight), 0);

    this.setState({
      left: left * -this.imgData.xRatio,
      top: top * -this.imgData.yRatio
    });
  }

  handleTouchStart = (e) => {
    const wasZoomed = this.state.isZoomed;

    if (wasZoomed) {
      if (this.imgData) {
        this.offset = {
          left: e.changedTouches[0].pageX - this.zoomImg.offsetLeft,
          top: e.changedTouches[0].pageY - this.zoomImg.offsetTop
        }
      }
    } else {
      this.setState({
        isActive: true,
        isTouch: true
      });

      this.onLoadCallback = this.touchZoomIn.bind(this, e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    }
  }

  handleTouchMove = (pageX, pageY) => {
    let left = pageX - this.offset.left;
    let top = pageY - this.offset.top;

    left = Math.max(Math.min(left, 0), (this.zoomImg.offsetWidth - this.el.offsetWidth) * -1);
    top = Math.max(Math.min(top, 0), (this.zoomImg.offsetHeight - this.el.offsetHeight) * -1);

    this.setState({
      left: left,
      top: top
    });
  }

  handleLoad = (e) => {
    this.imgData = {
      xRatio: (e.target.offsetWidth - this.el.offsetWidth) / this.el.offsetWidth,
      yRatio: (e.target.offsetHeight - this.el.offsetHeight) / this.el.offsetHeight
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
          isActive: false,
          isTouch: false
        })
      }, 120);
    });
  }

  zoomIn = (pageX, pageY) => {
    this.setState({
      isZoomed: true
    }, () => {
      this.handleMouseMove(pageX, pageY);

      if (this.props.onZoomIn) {
        this.props.onZoomIn();
      }
    });
  }

  touchZoomIn = (pageX, pageY) => {
    this.offset = {
      left: (this.zoomImg.offsetWidth / this.el.offsetWidth) * (pageX -  this.el.getBoundingClientRect().left),
      top: (this.zoomImg.offsetHeight / this.el.offsetHeight) * (pageY - this.el.getBoundingClientRect().top)
    };

    this.setState({
      isZoomed: true
    }, () => {
      this.handleTouchMove(pageX, pageY);

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
        className={`iiz ${this.props.fullscreenOnMobile && this.state.isZoomed ? 'iiz--full' : ''}`}
        ref={(el) => { this.el = el; }}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseMove={this.state.isZoomed && !this.state.isTouch ? (e) => { this.handleMouseMove(e.pageX, e.pageY); } : null}
        onMouseLeave={this.handleClose}
        onClick={this.state.isTouch ? null : this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.state.isZoomed ? (e) => { this.handleTouchMove(e.changedTouches[0].pageX, e.changedTouches[0].pageY); } : null}
      >
        <img className="iiz__img" src={this.props.src} />

        {this.state.isActive &&
          <img
            className={`iiz__zoom-img ${this.state.isZoomed ? 'iiz__zoom-img--visible' : ''}`}
            src={this.props.zoomSrc}
            style={{top: this.state.top, left: this.state.left}}
            ref={(el) => { this.zoomImg = el; }}
            onLoad={this.handleLoad}
          />
        }

        {this.state.isZoomed && this.state.isTouch &&
          <a className="iiz__close" href="javascript:void(0);" onClick={this.handleClose}>Close</a>
        }
      </figure>
    );
  }
}

InnerImageZoom.propTypes = {
  src: PropTypes.string,
  zoomSrc: PropTypes.string,
  fullscreenOnMobile: PropTypes.bool,
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func
};

export default InnerImageZoom;