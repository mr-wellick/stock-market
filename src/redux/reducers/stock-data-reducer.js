import { FETCH_STOCK_DATA_SUCCESS } from '../constants/';

function stockDataReducer(state = { stockData: {}, queryTerm: '' }, action) {
  if (action.type === FETCH_STOCK_DATA_SUCCESS) {
    return {
      ...state,
      stockData: {
        ...state.stockData,
        [state.queryTerm]: action.payload.stockData
      }
    };
  }

  return state;
}

export default stockDataReducer;
