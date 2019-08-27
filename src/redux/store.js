import { createStore } from 'redux';
import rootReducer from './reducers/';

let store;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeEnhancer());
} else {
  store = createStore(rootReducer);
}

export default store;
