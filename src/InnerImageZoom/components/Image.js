import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const {
    src,
    srcSet,
    sizes,
    sources,
    alt
  } = props;

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
            className="iiz__img"
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
          />
        </picture>
      ) : (
        <img
          className="iiz__img"
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
  alt: PropTypes.string
};

export default Image;