import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FullscreenPortal from './FullscreenPortal';
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
      isActive: true,
      isFullscreen: isFullscreen
    });
  }

  handleTouchStart = (e) => {
    this.offsets.x = e.changedTouches[0].pageX - this.zoomImg.offsetLeft;
    this.offsets.y = e.changedTouches[0].pageY - this.zoomImg.offsetTop;
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
    const container = this.state.isFullscreen ? this.fullscreenEl : this.img;

    this.isLoaded = true;
    this.ratios = this.getRatios(container, e.target);

    if (this.onLoadCallback) {
      this.onLoadCallback();
      this.onLoadCallback = null;
    }
  }

  handleMouseMove = (e) => {
    let left = e.pageX - this.offsets.x;
    let top = e.pageY - this.offsets.y;

    left = Math.max(Math.min(left, this.img.offsetWidth), 0);
    top = Math.max(Math.min(top, this.img.offsetHeight), 0);

    this.setState({
      left: left * -this.ratios.x,
      top: top * -this.ratios.y
    });
  }

  handleTouchMove = (e) => {
    const container = this.state.isFullscreen ? this.fullscreenEl : this.img;

    let left = e.changedTouches[0].pageX - this.offsets.x;
    let top = e.changedTouches[0].pageY - this.offsets.y;

    left = Math.max(Math.min(left, 0), (this.zoomImg.offsetWidth - container.offsetWidth) * -1);
    top = Math.max(Math.min(top, 0), (this.zoomImg.offsetHeight - container.offsetHeight) * -1);

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
      const container = this.state.isFullscreen ? this.fullscreenEl : this.img;
      const rect = container.getBoundingClientRect();

      initialMove(pageX, pageY, rect);

      if (this.props.onZoomIn) {
        this.props.onZoomIn();
      }
    });
  }

  initialMove = (pageX, pageY, rect) => {
    this.offsets.x = window.pageXOffset + rect.left
    this.offsets.y = window.pageYOffset + rect.top;

    this.handleMouseMove({
      pageX: pageX,
      pageY: pageY
    });
  }

  initialTouchMove = (pageX, pageY, rect) => {
    const initialPageX = (pageX - (window.pageXOffset + rect.left)) * -this.ratios.x;
    const initialPageY = (pageY - (window.pageYOffset + rect.top)) * -this.ratios.y;

    this.offsets.x = 0;
    this.offsets.y = 0;

    this.handleTouchMove({
      changedTouches: [{
        pageX: initialPageX,
        pageY: initialPageY
      }]
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
    this.offsets = {};
    this.ratios = {};
  }

  getRatios = (img, zoomImg) => {
    return {
      x: (zoomImg.offsetWidth - img.offsetWidth) / img.offsetWidth,
      y: (zoomImg.offsetHeight - img.offsetHeight) / img.offsetHeight
    };
  }

  getZoomImg = (fadeDuration) => {
    return(
      <Fragment>
        <img
          className={`iiz__zoom-img ${this.state.isZoomed ? 'iiz__zoom-img--visible' : ''}`}
          src={this.props.zoomSrc}
          ref={(el) => { this.zoomImg = el; }}
          style={{
            top: this.state.top,
            left: this.state.left,
            transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
          }}
          role="presentation"
          onLoad={this.handleLoad}
          onTouchStart={this.handleTouchStart}
          onMouseMove={!this.state.isTouch ? this.handleMouseMove : null}
          onTouchMove={this.state.isTouch ? this.handleTouchMove : null}
        />

        {this.state.isTouch &&
          <a className="iiz__btn iiz__close" href="javascript:void(0);" onClick={this.handleClose} aria-label="Zoom Out"></a>
        }
      </Fragment>
    );
  }

  render () {
    return(
      <figure
        className="iiz"
        ref={(el) => { this.img = el; }}
        onTouchStart={this.handleInitialTouchStart}
        onClick={this.handleClick}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseLeave={this.state.isTouch ? null : this.handleClose}
      >
        <img className="iiz__img" src={this.props.src} alt={this.props.alt} />

        {this.state.isActive &&
          <Fragment>
            {this.state.isFullscreen ? (
              <FullscreenPortal>
                <div className="iiz__zoom-container--full" ref={(el) => { this.fullscreenEl = el; }}>
                  {this.getZoomImg(0)}
                </div>
              </FullscreenPortal>
            ) : (
              this.getZoomImg(this.props.fadeDuration)
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
  src: PropTypes.string,
  zoomSrc: PropTypes.string,
  alt: PropTypes.string,
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