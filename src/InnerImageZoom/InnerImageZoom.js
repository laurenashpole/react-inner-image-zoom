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
      const rect = this.el.getBoundingClientRect();

      this.offset = {
        left: window.pageXOffset + rect.left,
        top: window.pageYOffset + rect.top
      };

      if (this.ratios) {
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
      left: left * -this.ratios.x,
      top: top * -this.ratios.y
    });
  }

  handleTouchStart = (e) => {
    const wasZoomed = this.state.isZoomed;

    if (wasZoomed) {
      if (this.ratios) {
        this.offset = {
          left: e.changedTouches[0].pageX - this.zoomImg.offsetLeft,
          top: e.changedTouches[0].pageY - this.zoomImg.offsetTop
        };
      }
    } else {
      this.setState({
        isActive: true,
        isTouch: true
      });

      if (this.props.fullscreenOnMobile) {
        document.documentElement.style.overflow = 'hidden';
      }

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
    this.ratios = {
      x: (e.target.offsetWidth - this.el.offsetWidth) / this.el.offsetWidth,
      y: (e.target.offsetHeight - this.el.offsetHeight) / this.el.offsetHeight
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
        this.ratios = null;

        if (this.props.fullscreenOnMobile) {
          document.documentElement.style.overflow = 'auto';
        }

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
    const rect = this.el.getBoundingClientRect();

    if (this.props.fullscreenOnMobile) {
      this.ratios = {
        x: (this.zoomImg.offsetWidth - this.el.offsetWidth) / this.el.offsetWidth,
        y: (this.zoomImg.offsetHeight - this.el.offsetHeight) / this.el.offsetHeight
      };
    }

    const zoomPageX = (pageX - (window.pageXOffset + rect.left)) * -this.ratios.x;
    const zoomPageY = (pageY - (window.pageYOffset + rect.top)) * -this.ratios.y;

    this.setState({
      isZoomed: true
    }, () => {
      this.offset = {
        left: 0,
        top: 0
      };

      this.handleTouchMove(zoomPageX, zoomPageY);

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
    const fullscreenOnMobile = this.props.fullscreenOnMobile && window.matchMedia && window.matchMedia(`(max-width: ${this.props.mobileBreakpoint}px)`).matches;

    return(
      <figure
        className={`iiz ${fullscreenOnMobile ? 'iiz--mobile' : ''} ${fullscreenOnMobile && this.state.isZoomed ? 'iiz--full' : ''}`}
        ref={(el) => { this.el = el; }}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseMove={this.state.isZoomed && !this.state.isTouch ? (e) => { this.handleMouseMove(e.pageX, e.pageY); } : null}
        onMouseLeave={this.handleClose}
        onClick={this.handleClick}
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
          <a className="iiz__close" href="javascript:void(0);" onClick={this.handleClose}></a>
        }
      </figure>
    );
  }
}

InnerImageZoom.propTypes = {
  src: PropTypes.string,
  zoomSrc: PropTypes.string,
  fullscreenOnMobile: PropTypes.bool,
  mobileBreakpoint: PropTypes.number,
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func
};

InnerImageZoom.defaultProps = {
  mobileBreakpoint: 500
};

export default InnerImageZoom;