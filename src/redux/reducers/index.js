import uiReducer from './ui-reducer.js';
import stockDataReducer from './stock-data-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  uiReducer,
  stockDataReducer
});

export default rootReducer;
