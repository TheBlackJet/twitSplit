import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './ducks';

const middleware = [
	logger
];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(rootReducer, /* initialState, */ composeEnhancers(
  applyMiddleware(...middleware)
));

if (module.hot) {
  module.hot.accept('./ducks', () => {
    store.replaceReducer(require('./ducks').default);
  });
}


export default store;