import { FETCH_STOCK_DATA } from '../constants/';

const fetchStockData = stockName => {
  return {
    type: FETCH_STOCK_DATA,
    payload: { stockName }
  };
};

export default fetchStockData;
