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

    left = Math.max(Math.min(left, this.container.offsetWidth), 0);
    top = Math.max(Math.min(top, this.container.offsetHeight), 0);

    this.setState({
      left: left * -this.ratios.x,
      top: top * -this.ratios.y
    });
  }

  handleTouchMove = (e) => {
    let left = e.changedTouches[0].pageX - this.offsets.x;
    let top = e.changedTouches[0].pageY - this.offsets.y;

    left = Math.max(Math.min(left, 0), (this.zoomImg.offsetWidth - this.container.offsetWidth) * -1);
    top = Math.max(Math.min(top, 0), (this.zoomImg.offsetHeight - this.container.offsetHeight) * -1);

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

      initialMove(pageX, pageY);

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
    this.container = {};
    this.offsets = {};
    this.ratios = {};
  }

  getContainer = (img, isFullscreen) => {
    if (isFullscreen) {
      return {
        offsetWidth: window.innerWidth,
        offsetHeight: window.innerHeight,
        left: 0,
        top: 0
      };
    }

    const rect = img.getBoundingClientRect();

    return {
      offsetWidth: rect.width,
      offsetHeight: rect.height,
      left: rect.left,
      top: rect.top
    };
  }

  getOffsets = (pageX, pageY, left, top) => {
    return {
      x: pageX - left,
      y: pageY - top
    };
  }

  getRatios = (img, zoomImg) => {
    return {
      x: (zoomImg.offsetWidth - img.offsetWidth) / img.offsetWidth,
      y: (zoomImg.offsetHeight - img.offsetHeight) / img.offsetHeight
    };
  }

  renderZoomImg = (fadeDuration) => {
    return(
      <Fragment>
        <img
          className={`iiz__zoom-img ${this.state.isZoomed ? 'iiz__zoom-img--visible' : ''}`}
          style={{
            top: this.state.top,
            left: this.state.left,
            transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
          }}
          src={this.props.zoomSrc || this.props.src}
          ref={(el) => { this.zoomImg = el; }}
          role="presentation"
          onLoad={this.handleLoad}
          onTouchStart={this.handleTouchStart}
          onMouseMove={!this.state.isTouch ? this.handleMouseMove : null}
          onTouchMove={this.state.isTouch ? this.handleTouchMove : null}
        />

        {this.state.isTouch &&
          <a
            className={`iiz__btn iiz__close ${this.state.isZoomed ? 'iiz__close--visible' : ''}`}
            style={{
              transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
            }}
            href="javascript:void(0);"
            onClick={this.handleClose}
            aria-label="Zoom Out"
          ></a>
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
        {this.props.sources ? (
          <picture>
            {this.props.sources.map((source, i) => {
              return(
                <Fragment key={i}>
                  {source.srcSet &&
                    <source
                      key={i}
                      srcSet={source.srcSet}
                      media={source.media}
                      type={source.type}
                    />
                  }
                </Fragment>
              );
            })}

            <img
              className="iiz__img"
              src={this.props.src}
              srcSet={this.props.srcSet}
              alt={this.props.alt}
            />
          </picture>
        ) : (
          <img
            className="iiz__img"
            src={this.props.src}
            srcSet={this.props.srcSet}
            alt={this.props.alt}
          />
        )}

        {this.state.isActive &&
          <Fragment>
            {this.state.isFullscreen ? (
              <FullscreenPortal className="iiz__zoom-portal">
                {this.renderZoomImg(0)}
              </FullscreenPortal>
            ) : (
              this.renderZoomImg(this.props.fadeDuration)
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
  sources: PropTypes.array,
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