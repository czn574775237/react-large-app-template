import React from 'react'
import {
  Router, Route, browserHistory,
  IndexRoute
} from 'react-router'
import store from './store/index'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from './containers/Root'
import AppView from './views/AppView'
import HomeView from './views/HomeView'
import UserView from './views/UserView'
import FormView from './views/FormView'

let history = syncHistoryWithStore(browserHistory, store)

module.exports = (
  <Router history={history}>
    <Route component={Root}>
      <Route path="/" component={AppView}>
        <IndexRoute component={HomeView} />
        <Route path="/user" component={UserView} />
        <Route path="/form" component={FormView} />
        <Route path="*" component={HomeView} />
      </Route>
    </Route>
  </Router>
)
