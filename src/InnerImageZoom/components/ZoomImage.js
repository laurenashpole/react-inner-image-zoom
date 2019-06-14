import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ZoomImage = (props) => {
  const {
    src,
    fadeDuration,
    top,
    left,
    isZoomed,
    onLoad,
    onTouchStart,
    onClose
  } = props;

  return(
    <Fragment>
      <img
        className={`iiz__zoom-img ${isZoomed ? 'iiz__zoom-img--visible' : ''}`}
        style={{
          top: top,
          left: left,
          transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
        }}
        src={src}
        onLoad={onLoad}
        onTouchStart={onTouchStart}
        alt=""
      />

      {onClose &&
        <button
          className={`iiz__btn iiz__close ${isZoomed ? 'iiz__close--visible' : ''}`}
          style={{
            transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
          }}
          onClick={onClose}
          aria-label="Zoom Out"
        />
      }
    </Fragment>
  );
};

ZoomImage.propTypes = {
  src: PropTypes.string,
  fadeDuration: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  isZoomed: PropTypes.bool,
  onLoad: PropTypes.func,
  onTouchStart: PropTypes.func,
  onClose: PropTypes.func
};

export default ZoomImage;