import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = ({
  src,
  srcSet,
  sizes,
  sources,
  alt,
  isZoomed,
  fadeDuration
}) => {
  return(
    <Fragment>
      {sources && sources.length > 0 ? (
        <picture>
          {sources.map((source, i) => {
            return(
              <Fragment key={i}>
                {source.srcSet &&
                  <source
                    srcSet={source.srcSet}
                    sizes={source.sizes}
                    media={source.media}
                    type={source.type}
                  />
                }
              </Fragment>
            );
          })}

          <img
            className={`iiz__img ${isZoomed ? 'iiz__img--hidden' : ''}`}
            style={{
              transition: `linear 0ms opacity ${isZoomed ? fadeDuration : 0}ms, linear ${fadeDuration}ms visibility ${isZoomed ? fadeDuration : 0}ms`
            }}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
          />
        </picture>
      ) : (
        <img
          className={`iiz__img ${isZoomed ? 'iiz__img--hidden' : ''}`}
          style={{
            transition: `linear 0ms opacity ${isZoomed ? fadeDuration : 0}ms, linear ${fadeDuration}ms visibility ${isZoomed ? fadeDuration : 0}ms`
          }}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
        />
      )}
    </Fragment>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.array,
  alt: PropTypes.string,
  fadeDuration: PropTypes.number,
  isZoomed: PropTypes.bool
};

export default Image;