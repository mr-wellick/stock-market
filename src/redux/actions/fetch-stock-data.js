import { FETCH_STOCK_DATA } from '../constants/';

const fetchStockData = input => {
  return {
    type: FETCH_STOCK_DATA,
    payload: { input }
  };
};

export default fetchStockData;
