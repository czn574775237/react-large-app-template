import React from 'react';
import {
  Router, Route, browserHistory,
  IndexRoute
} from 'react-router';
import store from './store/index';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import Home from './containers/Home';
import User from './containers/User';

// let history = syncHistoryWithStore(browserHistory, store);
let history = browserHistory;

module.exports = (
  <Router history={history}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="/user" component={User} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
);
