import { FETCH_IEX_DATA } from '../constants/';
import { FETCH_ERROR } from '../constants/';
import { SET_ACTIVE_STOCK } from '../constants/';

function iexReducer(state = { data: {}, error: '', activeStock: '' }, action) {
  if (action.type === FETCH_IEX_DATA) {
    return {
      ...state,
      data: {
        ...state.data,
        ...action.payload
      }
    };
  }

  if (action.type === FETCH_ERROR) {
    return {
      ...state,
      error: action.payload.error
    };
  }

  if (action.type === SET_ACTIVE_STOCK)
    return {
      ...state,
      activeStock: action.payload.activeStock
    };

  return state;
}

export default iexReducer;
