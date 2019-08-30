import { DELETE_STOCK } from '../constants/';

const deleteStock = ticker => {
  return {
    type: DELETE_STOCK,
    payload: { ticker }
  };
};

export default deleteStock;
