import NavLink from './NavLink';
import styles from './nav.styles.js';

const Nav = () => {
  return(
    <nav className="nav" aria-label="Main">
      <ul className="nav__list nav__list--secondary">
        <li className="nav__item">
          <a className="nav__link" href="https://github.com/laurenashpole/react-inner-image-zoom">Github</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="https://www.npmjs.com/package/react-inner-image-zoom">NPM</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="https://laurenashpole.github.io/vue-inner-image-zoom">Using Vue?</a>
        </li>
      </ul>

      <ul className="nav__list nav__list--primary">
        <li className="nav__item nav__item--left">
          <NavLink href="/" isExact={true} activeClassName="nav__link--active">
            <a className="nav__link">
              <h1>React Inner Image Zoom</h1>
            </a>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink href="/demos" activeClassName="nav__link--active">
            <a className="nav__link">Demos</a>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink href="/docs" activeClassName="nav__link--active">
            <a className="nav__link">Docs</a>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink href="/support" activeClassName="nav__link--active">
            <a className="nav__link">Support</a>
          </NavLink>
        </li>
      </ul>

      <style jsx>
        {styles}
      </style>
    </nav>
  );
};

export default Nav;
