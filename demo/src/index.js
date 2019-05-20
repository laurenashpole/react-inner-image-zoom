import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Demos from './pages/Demos';
import Docs from './pages/Docs';
import Support from './pages/Support';
import './styles.css';

const Demo = () => {
  return(
    <Fragment>
      <nav className="nav">
        <ul className="nav__list nav__list--secondary">
          <li className="nav__item">
            <a className="nav__link" href="https://github.com/laurenashpole/react-inner-image-zoom">Github</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">NPM</a>
          </li>
        </ul>

        <ul className="nav__list nav__list--primary">
          <li className="nav__item nav__item--left">
            <NavLink className="nav__link" to="/">Inner Image Zoom</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/demos" className="nav__link" activeClassName="nav__link--active">Demos</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/docs" className="nav__link" activeClassName="nav__link--active">Docs</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/support" className="nav__link" activeClassName="nav__link--active">Support</NavLink>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/demos" component={Demos} />
          <Route path="/docs" component={Docs} />
          <Route path="/support" component={Support} />
        </Switch>
      </div>
    </Fragment>
  );
};

render(
  <BrowserRouter>
    <Demo />
  </BrowserRouter>,
  document.querySelector('#demo')
);