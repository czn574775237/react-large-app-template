import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import routes from './routes';
import store from './store/index';

if (__DEV__) {
  require('./styles/index.less');
}

render((
  <Provider store={store}>
    {routes}
  </Provider>
), document.getElementById('root'));
