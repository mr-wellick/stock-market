import { FETCH_STOCK_DATA } from '../constants/';
import { FETCH_STOCK_DATA_SUCCESS } from '../constants/';

function stockDataReducer(state = { stockName: '', stockData: {}, activeStock: '' }, action) {
  if (action.type === FETCH_STOCK_DATA) {
    return {
      ...state,
      stockName: action.payload.stockName
    };
  }

  if (action.type === FETCH_STOCK_DATA_SUCCESS) {
    return {
      ...state,
      activeStock: state.stockName,
      stockData: {
        ...state.stockData,
        [state.stockName]: action.payload.stockData
      }
    };
  }

  return state;
}

export default stockDataReducer;
