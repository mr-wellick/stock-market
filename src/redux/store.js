import { createEpicMiddleware } from 'redux-observable';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import { rootEpic } from './epics/';

let store;
const epicMiddleware = createEpicMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeEnhancer(applyMiddleware(epicMiddleware)));
} else {
  store = createStore(rootReducer, applyMiddleware(epicMiddleware));
}

epicMiddleware.run(rootEpic);

export default store;
