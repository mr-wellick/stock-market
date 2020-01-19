import stockDataReducer from './stock-data-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stockDataReducer
});

export default rootReducer;
