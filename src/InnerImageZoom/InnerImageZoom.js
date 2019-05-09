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
      isFullscreen: false,
      left: 0,
      top: 0
    };

    this.setDefaults();
  }

  handleTouchStart = (e) => {
    if (this.state.isZoomed) {
      this.offsets.x = e.changedTouches[0].pageX - this.zoomImg.offsetLeft;
      this.offsets.y = e.changedTouches[0].pageY - this.zoomImg.offsetTop;
      return;
    }

    const isFullscreen = this.props.fullscreenOnMobile && window.matchMedia && window.matchMedia(`(max-width: ${this.props.mobileBreakpoint}px)`).matches;

    this.setState({
      isTouch: true,
      isActive: true,
      isFullscreen: isFullscreen
    });
  }

  handleMouseEnter = () => {
    this.setState({
      isActive: true
    });
  }

  handleClick = (e) => {
    if (this.state.isZoomed) {
      if (!this.state.isTouch) {
        this.zoomOut();
      }

      return;
    }

    if (this.isLoaded) {
      this.zoomIn(e.pageX, e.pageY);
    } else {
      this.onLoadCallback = this.zoomIn.bind(this, e.pageX, e.pageY);
    }
  }

  handleLoad = (e) => {
    this.isLoaded = true;
    this.ratios = this.getRatios(this.img, e.target);

    if (this.onLoadCallback) {
      this.onLoadCallback();
      this.onLoadCallback = null;
    }
  }

  handleMouseMove = (pageX, pageY) => {
    let left = pageX - this.offsets.x;
    let top = pageY - this.offsets.y;

    left = Math.max(Math.min(left, this.img.offsetWidth), 0);
    top = Math.max(Math.min(top, this.img.offsetHeight), 0);

    this.setState({
      left: left * -this.ratios.x,
      top: top * -this.ratios.y
    });
  }

  handleTouchMove = (pageX, pageY) => {
    let left = pageX - this.offsets.x;
    let top = pageY - this.offsets.y;

    left = Math.max(Math.min(left, 0), (this.zoomImg.offsetWidth - this.img.offsetWidth) * -1);
    top = Math.max(Math.min(top, 0), (this.zoomImg.offsetHeight - this.img.offsetHeight) * -1);

    this.setState({
      left: left,
      top: top
    });
  }

  handleClose = () => {
    this.zoomOut(() => {
      setTimeout(() => {
        this.setDefaults();

        this.setState({
          isActive: false,
          isTouch: false,
          isFullscreen: false
        })
      }, this.props.fadeDuration);
    });
  }

  zoomIn = (pageX, pageY) => {
    this.setState({
      isZoomed: true
    }, () => {
      const initialMove = this.state.isTouch ? this.initialTouchMove : this.initialMove;
      const rect = this.img.getBoundingClientRect();

      initialMove(pageX, pageY, rect);

      if (this.props.onZoomIn) {
        this.props.onZoomIn();
      }
    });
  }

  initialMove = (pageX, pageY, rect) => {
    this.offsets.x = window.pageXOffset + rect.left
    this.offsets.y = window.pageYOffset + rect.top;
    this.handleMouseMove(pageX, pageY);
  }

  initialTouchMove = (pageX, pageY, rect) => {
    if (this.state.isFullscreen) {
      this.ratios = this.getRatios(this.img, this.zoomImg);
    }

    const initialPageX = (pageX - (window.pageXOffset + rect.left)) * -this.ratios.x;
    const initialPageY = (pageY - (window.pageYOffset + rect.top)) * -this.ratios.y;

    this.offsets.x = 0;
    this.offsets.y = 0;
    this.handleTouchMove(initialPageX, initialPageY);
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

  setDefaults = () => {
    this.isLoaded = false;
    this.onLoadCallback = null;
    this.offsets = {};
    this.ratios = {};
  }

  getRatios = (img, zoomImg) => {
    return {
      x: (zoomImg.offsetWidth - img.offsetWidth) / img.offsetWidth,
      y: (zoomImg.offsetHeight - img.offsetHeight) / img.offsetHeight
    };
  }

  render () {
    const fadeDuration = this.state.isFullscreen ? 0 : this.props.fadeDuration;

    return(
      <figure
        className={`iiz ${this.state.isFullscreen ? 'iiz--mobile' : ''} ${this.state.isFullscreen && this.state.isZoomed ? 'iiz--full' : ''}`}
        ref={(el) => { this.img = el; }}
        onTouchStart={this.handleTouchStart}
        onClick={this.handleClick}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseMove={this.state.isZoomed && !this.state.isTouch ? (e) => { this.handleMouseMove(e.pageX, e.pageY); } : null}
        onMouseLeave={this.state.isTouch ? null : this.handleClose}
        onTouchMove={this.state.isZoomed ? (e) => { this.handleTouchMove(e.changedTouches[0].pageX, e.changedTouches[0].pageY); } : null}
      >
        <img className="iiz__img" src={this.props.src} />

        {this.state.isActive &&
          <img
            className={`iiz__zoom-img ${this.state.isZoomed ? 'iiz__zoom-img--visible' : ''}`}
            src={this.props.zoomSrc}
            style={{top: this.state.top, left: this.state.left, transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`}}
            ref={(el) => { this.zoomImg = el; }}
            onLoad={this.handleLoad}
          />
        }

        {this.state.isZoomed && this.state.isTouch &&
          <a className="iiz__close" href="javascript:void(0);" onClick={this.handleClose}></a>
        }
      </figure>
    );
  }
}

InnerImageZoom.propTypes = {
  src: PropTypes.string,
  zoomSrc: PropTypes.string,
  fadeDuration: PropTypes.number,
  fullscreenOnMobile: PropTypes.bool,
  mobileBreakpoint: PropTypes.number,
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func
};

InnerImageZoom.defaultProps = {
  fadeDuration: 150,
  mobileBreakpoint: 640
};

export default InnerImageZoom;