import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from './components/ResponsiveImage';
import FullscreenPortal from './components/FullscreenPortal';
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

  handleInitialTouchStart = () => {
    const isFullscreen = this.props.fullscreenOnMobile && window.matchMedia && window.matchMedia(`(max-width: ${this.props.mobileBreakpoint}px)`).matches;

    this.setState({
      isTouch: true,
      isFullscreen: isFullscreen
    });
  }

  handleTouchStart = (e) => {
    const touch = e.changedTouches[0];
    this.offsets = this.getOffsets(touch.pageX, touch.pageY, this.zoomImg.offsetLeft, this.zoomImg.offsetTop);
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

    if (this.state.isTouch) {
      this.setState({
        isActive: true
      });
    }

    if (this.isLoaded) {
      this.zoomIn(e.pageX, e.pageY);
    } else {
      this.onLoadCallback = this.zoomIn.bind(this, e.pageX, e.pageY);
    }
  }

  handleLoad = (e) => {
    this.isLoaded = true;
    this.container = this.getContainer(this.img, false);
    this.ratios = this.getRatios(this.container, e.target);

    if (this.onLoadCallback) {
      this.onLoadCallback();
      this.onLoadCallback = null;
    }
  }

  handleMouseMove = (e) => {
    let left = e.pageX - this.offsets.x;
    let top = e.pageY - this.offsets.y;

    left = Math.max(Math.min(left, this.container.width), 0);
    top = Math.max(Math.min(top, this.container.height), 0);

    this.setState({
      left: left * -this.ratios.x,
      top: top * -this.ratios.y
    });
  }

  handleTouchMove = (e) => {
    e.preventDefault();

    let left = e.changedTouches[0].pageX - this.offsets.x;
    let top = e.changedTouches[0].pageY - this.offsets.y;

    left = Math.max(Math.min(left, 0), (this.zoomImg.offsetWidth - this.container.width) * -1);
    top = Math.max(Math.min(top, 0), (this.zoomImg.offsetHeight - this.container.height) * -1);

    this.setState({
      left: left,
      top: top
    });
  }

  handleClose = () => {
    this.zoomOut(() => {
      setTimeout(() => {
        if (this.state.isTouch) {
          this.zoomImg.removeEventListener('touchmove', this.handleTouchMove);
        }

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

      initialMove(pageX, pageY);

      if (this.state.isTouch) {
        this.zoomImg.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      }

      if (this.props.onZoomIn) {
        this.props.onZoomIn();
      }
    });
  }

  initialMove = (pageX, pageY) => {
    this.offsets = this.getOffsets(window.pageXOffset, window.pageYOffset, -this.container.left, -this.container.top);

    this.handleMouseMove({
      pageX: pageX,
      pageY: pageY
    });
  }

  initialTouchMove = (pageX, pageY) => {
    const initialPageX = (pageX - (window.pageXOffset + this.container.left)) * -this.ratios.x;
    const initialPageY = (pageY - (window.pageYOffset + this.container.top)) * -this.ratios.y;

    this.container = this.getContainer(this.img, this.state.isFullscreen);
    this.offsets = this.getOffsets(0, 0, 0, 0);

    this.handleTouchMove({
      changedTouches: [{
        pageX: initialPageX,
        pageY: initialPageY
      }],
      preventDefault: () => {}
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

  setDefaults = () => {
    this.isLoaded = false;
    this.onLoadCallback = null;
    this.container = {};
    this.offsets = {};
    this.ratios = {};
  }

  getContainer = (img, isFullscreen) => {
    if (isFullscreen) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        left: 0,
        top: 0
      };
    }

    return img.getBoundingClientRect();
  }

  getOffsets = (pageX, pageY, left, top) => {
    return {
      x: pageX - left,
      y: pageY - top
    };
  }

  getRatios = (container, zoomImg) => {
    return {
      x: (zoomImg.offsetWidth - container.width) / container.width,
      y: (zoomImg.offsetHeight - container.height) / container.height
    };
  }

  renderZoomImg = (src, fadeDuration) => {
    return(
      <Fragment>
        <img
          className={`iiz__zoom-img ${this.state.isZoomed ? 'iiz__zoom-img--visible' : ''}`}
          style={{
            top: this.state.top,
            left: this.state.left,
            transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
          }}
          src={src}
          ref={(el) => { this.zoomImg = el; }}
          onLoad={this.handleLoad}
          onTouchStart={this.handleTouchStart}
          onMouseMove={!this.state.isTouch ? this.handleMouseMove : null}
          alt=""
        />

        {this.state.isTouch &&
          <button
            className={`iiz__btn iiz__close ${this.state.isZoomed ? 'iiz__close--visible' : ''}`}
            style={{
              transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
            }}
            href="javascript:void(0);"
            onClick={this.handleClose}
            aria-label="Zoom Out"
          / >
        }
      </Fragment>
    );
  }

  render () {
    const {
      src,
      srcSet,
      sizes,
      sources,
      zoomSrc,
      alt,
      fadeDuration,
      className
    } = this.props;

    return(
      <figure
        className={`iiz ${className ? className : ''}`}
        ref={(el) => { this.img = el; }}
        onTouchStart={this.handleInitialTouchStart}
        onClick={this.handleClick}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseLeave={this.state.isTouch ? null : this.handleClose}
      >
        <ResponsiveImage
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          sources={sources}
          alt={alt}
        />

        {this.state.isActive &&
          <Fragment>
            {this.state.isFullscreen ? (
              <FullscreenPortal className="iiz__zoom-portal">
                {this.renderZoomImg(zoomSrc || src, 0)}
              </FullscreenPortal>
            ) : (
              this.renderZoomImg(zoomSrc || src, fadeDuration)
            )}
          </Fragment>
        }

        {!this.state.isZoomed &&
          <span className="iiz__btn iiz__hint"></span>
        }
      </figure>
    );
  }
}

InnerImageZoom.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.array,
  zoomSrc: PropTypes.string,
  alt: PropTypes.string,
  fadeDuration: PropTypes.number,
  fullscreenOnMobile: PropTypes.bool,
  mobileBreakpoint: PropTypes.number,
  className: PropTypes.string,
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func
};

InnerImageZoom.defaultProps = {
  fadeDuration: 150,
  mobileBreakpoint: 640
};

export default InnerImageZoom;