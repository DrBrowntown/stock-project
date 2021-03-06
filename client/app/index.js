import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './containers/App/App.js';
import NotFound from './containers/App/NotFound.js';

import Home from './containers/Home/Home.js';

import Profile from './containers/Profile/Profile.js';

import './styles/styles.scss';



render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/*" component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
