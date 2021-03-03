import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const FullscreenPortal = ({ children }) => {
  const [portal] = useState(() => {
    const el = document.createElement('div');
    el.classList.add('iiz__zoom-portal');
    return el;
  });

  useEffect(() => {
    document.body.appendChild(portal);
    return () => document.body.removeChild(portal);
  }, [portal]);

  return createPortal(children, portal);
};

FullscreenPortal.propTypes = {
  children: PropTypes.element
};

export default FullscreenPortal;
