import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from './components/Image';
import ZoomImage from './components/ZoomImage';
import FullscreenPortal from './components/FullscreenPortal';

class InnerImageZoom extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isActive: false,
      isTouch: false,
      isZoomed: false,
      isFullscreen: false,
      isDragging: false,
      currentMoveType: props.moveType,
      left: 0,
      top: 0
    };

    this.setDefaults();
  }

  handleMouseEnter = (e) => {
    this.setState({
      isActive: true
    });

    if (this.props.zoomType === 'hover' && !this.state.isZoomed) {
      this.handleClick(e);
    }
  }

  handleTouchStart = () => {
    const isFullscreen = this.props.fullscreenOnMobile && window.matchMedia && window.matchMedia(`(max-width: ${this.props.mobileBreakpoint}px)`).matches;

    this.setState({
      isTouch: true,
      isFullscreen: isFullscreen,
      currentMoveType: 'drag'
    });
  }

  handleClick = (e) => {
    if (this.state.isZoomed) {
      if (!this.state.isTouch && !this.state.isDragging) {
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
    this.zoomImg = e.target;
    this.zoomImg.setAttribute('width', this.zoomImg.offsetWidth * this.props.zoomScale);
    this.zoomImg.setAttribute('height', this.zoomImg.offsetHeight * this.props.zoomScale);
    this.bounds = this.getBounds(this.img, false);
    this.ratios = this.getRatios(this.bounds, this.zoomImg);

    if (this.onLoadCallback) {
      this.onLoadCallback();
      this.onLoadCallback = null;
    }
  }

  handleMouseMove = (e) => {
    let left = e.pageX - this.offsets.x;
    let top = e.pageY - this.offsets.y;

    left = Math.max(Math.min(left, this.bounds.width), 0);
    top = Math.max(Math.min(top, this.bounds.height), 0);

    this.setState({
      left: left * -this.ratios.x,
      top: top * -this.ratios.y
    });
  }

  handleDragStart = (e) => {
    this.offsets = this.getOffsets((e.pageX || e.changedTouches[0].pageX), (e.pageY || e.changedTouches[0].pageY), this.zoomImg.offsetLeft, this.zoomImg.offsetTop);
    this.zoomImg.addEventListener(this.state.isTouch ? 'touchmove' : 'mousemove', this.handleDragMove, { passive: false });

    if (!this.state.isTouch) {
      this.eventPosition = {
        x: e.pageX,
        y: e.pageY
      };
    }
  }

  handleDragMove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let left = (e.pageX || e.changedTouches[0].pageX) - this.offsets.x;
    let top = (e.pageY || e.changedTouches[0].pageY) - this.offsets.y;

    left = Math.max(Math.min(left, 0), (this.zoomImg.offsetWidth - this.bounds.width) * -1);
    top = Math.max(Math.min(top, 0), (this.zoomImg.offsetHeight - this.bounds.height) * -1);

    this.setState({
      left: left,
      top: top
    });
  }

  handleDragEnd = (e) => {
    this.zoomImg.removeEventListener(this.state.isTouch ? 'touchmove' : 'mousemove', this.handleDragMove);

    if (!this.state.isTouch) {
      const moveX = Math.abs(e.pageX - this.eventPosition.x);
      const moveY = Math.abs(e.pageY - this.eventPosition.y);

      this.setState({
        isDragging: moveX > 5 || moveY > 5
      });
    }
  }

  handleMouseLeave = (e) => {
    this.state.currentMoveType === 'drag' && this.state.isZoomed ? this.handleDragEnd(e) : this.handleClose();
  }

  handleClose = () => {
    this.zoomOut(() => {
      setTimeout(() => {
        this.setDefaults();

        this.setState({
          isActive: false,
          isTouch: false,
          isFullscreen: false,
          currentMoveType: this.props.moveType
        })
      }, this.props.fadeDuration);
    });
  }

  initialMove = (pageX, pageY) => {
    this.offsets = this.getOffsets(window.pageXOffset, window.pageYOffset, -this.bounds.left, -this.bounds.top);

    this.handleMouseMove({
      pageX: pageX,
      pageY: pageY
    });
  }

  initialDragMove = (pageX, pageY) => {
    const initialPageX = (pageX - (window.pageXOffset + this.bounds.left)) * -this.ratios.x;
    const initialPageY = (pageY - (window.pageYOffset + this.bounds.top)) * -this.ratios.y;

    this.bounds = this.getBounds(this.img, this.state.isFullscreen);
    this.offsets = this.getOffsets(0, 0, 0, 0);

    this.handleDragMove({
      changedTouches: [{
        pageX: initialPageX,
        pageY: initialPageY
      }],
      preventDefault: () => {},
      stopPropagation: () => {}
    });
  }

  zoomIn = (pageX, pageY) => {
    this.setState({
      isZoomed: true
    }, () => {
      const initialMove = this.state.currentMoveType === 'drag' ? this.initialDragMove : this.initialMove;
      initialMove(pageX, pageY);

      if (this.props.afterZoomIn) {
        this.props.afterZoomIn();
      }
    });
  }

  zoomOut = (callback) => {
    this.setState({
      isZoomed: false
    }, () => {
      if (this.props.afterZoomOut) {
        this.props.afterZoomOut();
      }

      if (callback) {
        callback();
      }
    });
  }

  setDefaults = () => {
    this.isLoaded = false;
    this.onLoadCallback = null;
    this.zoomImg = null;
    this.bounds = {};
    this.offsets = {};
    this.ratios = {};
    this.eventPosition = {};
  }

  getBounds = (img, isFullscreen) => {
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

  getRatios = (bounds, zoomImg) => {
    return {
      x: (zoomImg.offsetWidth - bounds.width) / bounds.width,
      y: (zoomImg.offsetHeight - bounds.height) / bounds.height
    };
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

    const zoomImageProps = {
      src: zoomSrc || src,
      fadeDuration: this.state.isFullscreen ? 0 : fadeDuration,
      top: this.state.top,
      left: this.state.left,
      isZoomed: this.state.isZoomed,
      onLoad: this.handleLoad,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      onClose: this.state.isTouch ? this.handleClose : null
    };

    return(
      <figure
        className={`iiz ${this.state.currentMoveType === 'drag' ? 'iiz--drag' : ''} ${className ? className : ''}`}
        ref={(el) => { this.img = el; }}
        onTouchStart={this.handleTouchStart}
        onClick={this.handleClick}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseMove={this.state.currentMoveType === 'drag' || !this.state.isZoomed ? null : this.handleMouseMove}
        onMouseLeave={this.state.isTouch ? null : this.handleMouseLeave}
      >
        <Image
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          sources={sources}
          alt={alt}
          fadeDuration={this.props.fadeDuration}
          isZoomed={this.state.isZoomed}
        />

        {this.state.isActive &&
          <Fragment>
            {this.state.isFullscreen ? (
              <FullscreenPortal className="iiz__zoom-portal">
                <ZoomImage {...zoomImageProps} />
              </FullscreenPortal>
            ) : (
              <ZoomImage {...zoomImageProps} />
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
  moveType: PropTypes.string,
  zoomType: PropTypes.string,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.array,
  zoomSrc: PropTypes.string,
  zoomScale: PropTypes.number,
  alt: PropTypes.string,
  fadeDuration: PropTypes.number,
  fullscreenOnMobile: PropTypes.bool,
  mobileBreakpoint: PropTypes.number,
  className: PropTypes.string,
  afterZoomIn: PropTypes.func,
  afterZoomOut: PropTypes.func
};

InnerImageZoom.defaultProps = {
  moveType: 'pan',
  zoomType: 'click',
  fadeDuration: 150,
  mobileBreakpoint: 640,
  zoomScale: 1
};

export default InnerImageZoom;
