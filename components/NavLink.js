import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, isExact, activeClassName, children }) => {
  const router = useRouter();
  const isActive = isExact ? router.pathname === href : router.pathname.indexOf(href) !== -1;

  return (
    <Link href={href}>
      {React.cloneElement(children, { className: `${children.props.className || ''} ${isActive ? activeClassName : ''}` })}
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  isExact: PropTypes.bool,
  activeClassName: PropTypes.string,
  children: PropTypes.any
};

export default NavLink;
