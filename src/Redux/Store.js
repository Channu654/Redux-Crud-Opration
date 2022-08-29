import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Reducer';

const rooteducer = combineReducers({ reducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rooteducer,
  composeEnhancers(applyMiddleware(thunk))
);

// export const store = createStore(reducer);
