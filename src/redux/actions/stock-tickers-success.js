import { QUERY_STOCK_TICKERS_SUCCESS } from '../constants/';

function stockTickersSuccess(tickers) {
  return {
    type: QUERY_STOCK_TICKERS_SUCCESS,
    payload: { tickers }
  };
}

export default stockTickersSuccess;
