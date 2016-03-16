import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
