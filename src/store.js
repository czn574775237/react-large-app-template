import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';


let middlewares;

if (__DEV__) {
  middlewares = [thunk, createLogger()];
} else {
  middlewares = [thunk];
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

export default store;