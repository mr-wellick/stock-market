import { DELETE_STOCK } from '../constants/';

function deleteStock(stockName) {
  return {
    type: DELETE_STOCK,
    payload: { stockName }
  };
}

export default deleteStock;
