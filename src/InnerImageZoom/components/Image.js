import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, sources, width, height, hasSpacer, imgAttributes, isZoomed, fadeDuration }) => {
  const createSpacer = width && height && hasSpacer;

  return (
    <div style={{ paddingTop: createSpacer ? `${(height / width) * 100}%` : null }}>
      {sources && sources.length > 0 ? (
        <picture>
          {sources.map((source, i) => {
            return <Fragment key={i}>{source.srcSet && <source {...source} />}</Fragment>;
          })}

          <img
            {...imgAttributes}
            className={`iiz__img ${imgAttributes.className || ''} ${isZoomed ? 'iiz__img--hidden' : ''} ${
              createSpacer ? 'iiz__img--abs' : ''
            }`}
            style={{
              transition: `opacity 0ms linear ${isZoomed ? fadeDuration : 0}ms, visibility 0ms linear ${
                isZoomed ? fadeDuration : 0
              }ms`
            }}
            src={src}
            width={width}
            height={height}
          />
        </picture>
      ) : (
        <img
          {...imgAttributes}
          className={`iiz__img ${imgAttributes.className || ''} ${isZoomed ? 'iiz__img--hidden' : ''} ${
            createSpacer ? 'iiz__img--abs' : ''
          }`}
          style={{
            transition: `opacity 0ms linear ${isZoomed ? fadeDuration : 0}ms, visibility 0ms linear ${
              isZoomed ? fadeDuration : 0
            }ms`
          }}
          src={src}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  sources: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  hasSpacer: PropTypes.bool,
  imgAttributes: PropTypes.object,
  fadeDuration: PropTypes.number,
  isZoomed: PropTypes.bool
};

export default Image;
