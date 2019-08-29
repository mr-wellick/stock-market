import uiReducer from './ui-reducer.js';
import stockTickersReducer from './stock-tickers-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  uiReducer,
  stockTickersReducer
});

export default rootReducer;
