import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/';
import rootSaga from './sagas/';

const sagaMiddleware = createSagaMiddleware();
let store;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
} else {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(rootSaga);

export default store;
