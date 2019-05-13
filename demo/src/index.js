import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
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
          <li className="nav__item"><a href="https://github.com/laurenashpole/react-inner-image-zoom">Github</a></li>
          <li className="nav__item"><a href="#">NPM</a></li>
        </ul>

        <ul className="nav__list nav__list--primary">
          <li className="nav__item nav__item--left"><Link to="/">Inner Image Zoom</Link></li>
          <li className="nav__item"><Link to="/demos">Demos</Link></li>
          <li className="nav__item"><Link to="/docs">Docs</Link></li>
          <li className="nav__item"><Link to="/support">Support</Link></li>
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