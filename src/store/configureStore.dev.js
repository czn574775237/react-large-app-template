import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import Devtools from '../containers/Devtools';

export default function configureStore(initialState = {}) {
  let middleware = applyMiddleware(
    thunk,
    createLogger()
  );

  if (__DEV__) {
    const devtools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('../containers/Devtools').default.instrument();
    middleware = compose(middleware, devtools);
  }

  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
