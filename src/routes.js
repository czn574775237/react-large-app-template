import React from 'react';
import {
  Router, Route, browserHistory,
  IndexRoute
} from 'react-router';
import App from './App';
import {
  Home
} from './views/';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="*" component={Home}></Route>
    </Route>
  </Router>
);
