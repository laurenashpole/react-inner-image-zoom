import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ZoomImage = ({ src, fadeDuration, top, left, isZoomed, onLoad, onDragStart, onDragEnd, onClose }) => {
  return (
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
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        draggable="false"
        alt=""
      />

      {onClose && (
        <button
          className={`iiz__btn iiz__close ${isZoomed ? 'iiz__close--visible' : ''}`}
          style={{
            transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
          }}
          onClick={onClose}
          aria-label="Zoom Out"
        />
      )}
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
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onClose: PropTypes.func
};

export default ZoomImage;
