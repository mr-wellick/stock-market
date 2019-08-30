import { FETCH_STOCK_DATA } from '../constants/';
import { FETCH_STOCK_DATA_SUCCESS } from '../constants/';
import { SET_ACTIVE_STOCK } from '../constants/';
import { DELETE_STOCK } from '../constants/';

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

  if (action.type === DELETE_STOCK) {
    const updatedStocks = {};

    for (const stockName in state.stockData) {
      if (stockName !== action.payload.ticker) {
        updatedStocks[stockName] = state.stockData[stockName];
      }
    }

    return {
      ...state,
      stockData: updatedStocks
    };
  }

  return state;
}

export default stockDataReducer;