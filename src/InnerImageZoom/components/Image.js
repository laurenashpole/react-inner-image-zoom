import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, srcSet, sizes, sources, width, height, hasSpacer, alt, isZoomed, fadeDuration }) => {
  const createSpacer = width && height && hasSpacer;

  return (
    <div style={{ paddingTop: createSpacer ? `${(height / width) * 100}%` : null }}>
      {sources && sources.length > 0 ? (
        <picture>
          {sources.map((source, i) => {
            return (
              <Fragment key={i}>
                {source.srcSet && (
                  <source srcSet={source.srcSet} sizes={source.sizes} media={source.media} type={source.type} />
                )}
              </Fragment>
            );
          })}

          <img
            className={`iiz__img ${isZoomed ? 'iiz__img--hidden' : ''} ${createSpacer ? 'iiz__img--abs' : ''}`}
            style={{
              transition: `linear 0ms opacity ${isZoomed ? fadeDuration : 0}ms, linear ${fadeDuration}ms visibility ${
                isZoomed ? fadeDuration : 0
              }ms`
            }}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            width={width}
            height={height}
            alt={alt}
          />
        </picture>
      ) : (
        <img
          className={`iiz__img ${isZoomed ? 'iiz__img--hidden' : ''} ${createSpacer ? 'iiz__img--abs' : ''}`}
          style={{
            transition: `linear 0ms opacity ${isZoomed ? fadeDuration : 0}ms, linear ${fadeDuration}ms visibility ${
              isZoomed ? fadeDuration : 0
            }ms`
          }}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          width={width}
          height={height}
          alt={alt}
        />
      )}
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  hasSpacer: PropTypes.bool,
  alt: PropTypes.string,
  fadeDuration: PropTypes.number,
  isZoomed: PropTypes.bool
};

export default Image;
