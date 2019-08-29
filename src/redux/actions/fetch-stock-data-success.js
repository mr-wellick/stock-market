import { FETCH_STOCK_DATA_SUCCESS } from '../constants/';

const fetchStockDataSuccess = stockData => {
  return {
    type: FETCH_STOCK_DATA_SUCCESS,
    payload: { stockData }
  };
};

export default fetchStockDataSuccess;
