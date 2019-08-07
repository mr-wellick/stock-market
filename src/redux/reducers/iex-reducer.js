import { FETCH_IEX_DATA } from '../constants/';
import { FETCH_ERROR } from '../constants/';
import { SET_ACTIVE_STOCK } from '../constants/';
import { TSLA } from '../../mock-data/tsla.js';

function iexReducer(state = { data: { TSLA }, error: '', activeStock: 'TSLA' }, action) {
  if (action.type === FETCH_IEX_DATA) {
    return {
      ...state,
      activeStock: Object.keys(action.payload)[0],
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

  if (action.type === SET_ACTIVE_STOCK) {
    return {
      ...state,
      activeStock: action.payload.activeStock
    };
  }

  return state;
}

export default iexReducer;
