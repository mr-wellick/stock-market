import { FETCH_STOCK_DATA } from '../constants/';
import { FETCH_STOCK_DATA_SUCCESS } from '../constants/';
import { SET_ACTIVE_STOCK } from '../constants/';

function stockDataReducer(state = { input: '', stockData: {}, activeStock: '' }, action) {
  if (action.type === FETCH_STOCK_DATA) {
    return {
      ...state,
      input: action.payload.input
    };
  }

  if (action.type === FETCH_STOCK_DATA_SUCCESS) {
    return {
      ...state,
      activeStock: state.input,
      stockData: {
        ...state.stockData,
        [state.input]: action.payload.stockData
      }
    };
  }

  if (action.type === SET_ACTIVE_STOCK) {
    return {
      ...state,
      activeStock: action.payload.activeStock
    };
  }

  return state;
}

export default stockDataReducer;
