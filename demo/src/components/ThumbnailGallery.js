import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerImageZoom from '../../../src';
import '../stylesheets/thumbnail-gallery.css';

class ThumbnailGallery extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  handleClick = (i) => {
    this.setState({
      activeIndex: i
    });
  }

  render () {
    return(
      <div className="thumbnail-gallery">
        <InnerImageZoom src={this.props.images[this.state.activeIndex].src} zoomSrc={this.props.images[this.state.activeIndex].zoomSrc} fullscreenOnMobile={true} />

        <div className="thumbnail-gallery__thumbnails">
          {this.props.images.map((image, i) => {
            return(
              <a className="thumbnail-gallery__thumbnail" key={i} href="javascript:void(0);" onClick={this.handleClick.bind(this, i)}>
                <img src={image.src} />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

ThumbnailGallery.propTypes = {
  images: PropTypes.array
};

export default ThumbnailGallery;