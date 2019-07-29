import uiReducer from './ui-reducer.js';
import iexReducer from './iex-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  uiReducer,
  iexReducer
});

export default rootReducer;
