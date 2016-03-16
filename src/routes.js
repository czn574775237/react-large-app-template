import React from 'react';
import {
  Router, Route, browserHistory,
  IndexRoute
} from 'react-router';

import Root from './views/Root';
import Home from './views/Home';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="*" component={Home}></Route>
    </Route>
  </Router>
);
