import { ACTIVE_STOCK } from '../constants/';

function selectStock(activeStock) {
  return {
    type: ACTIVE_STOCK,
    payload: { activeStock }
  };
}

export default selectStock;
