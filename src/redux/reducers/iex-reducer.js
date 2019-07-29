import { FETCH_IEX_DATA } from '../constants/';
import { FETCH_ERROR } from '../constants/';

function iexReducer(state = { data: {}, error: '' }, action) {
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

  return state;
}

export default iexReducer;
