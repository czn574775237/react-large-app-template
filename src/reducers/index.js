import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';

const app = combineReducers({
  user,

  // bind react-router state to this
  routing: routerReducer
});

export default app;
