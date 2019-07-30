import { SET_ACTIVE_STOCK } from '../constants/';

const setActiveStock = activeStock => {
  return {
    type: SET_ACTIVE_STOCK,
    payload: { activeStock }
  };
};

export default setActiveStock;
