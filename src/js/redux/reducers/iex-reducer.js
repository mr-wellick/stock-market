import { FETCH_IEX_DATA } from '../constants/';
import { FETCH_ERROR } from '../constants/';

function iexReducer(state = { data: [], error: null }, action) {
  if (action.type === FETCH_IEX_DATA) {
    return {
      ...state,
      data: [...state.data, action.data]
    };
  }

  if (action.type === FETCH_ERROR) {
    return {
      ...state,
      error: action.error
    };
  }

  return state;
}

export default iexReducer;
