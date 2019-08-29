import { QUERY_STOCK_TICKERS } from '../constants/';
import { QUERY_STOCK_TICKERS_SUCCESS } from '../constants/';

function stockTickersReducer(state = { queryTerm: '', tickers: {} }, action) {
  if (action.type === QUERY_STOCK_TICKERS) {
    return {
      ...state,
      queryTerm: action.payload.queryTerm
    };
  }

  if (action.type === QUERY_STOCK_TICKERS_SUCCESS) {
    return {
      ...state,
      tickers: action.payload.tickers
    };
  }

  return state;
}

export default stockTickersReducer;
