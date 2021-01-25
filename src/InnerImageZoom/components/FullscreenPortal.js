import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const FullscreenPortal = ({ children }) => {
  const portal = useRef(document.createElement('div'));

  useEffect(() => {
    portal.current.classList.add('iiz__zoom-portal');
    document.body.appendChild(portal.current);

    return () => {
      document.body.removeChild(portal.current);
    };
  }, []);

  return createPortal(children, portal.current);
};

FullscreenPortal.propTypes = {
  children: PropTypes.element
};

export default FullscreenPortal;