import { QUERY_STOCK_TICKERS } from '../constants/';

const queryStockTickers = queryTerm => {
  return {
    type: QUERY_STOCK_TICKERS,
    payload: { queryTerm }
  };
};

export default queryStockTickers;
