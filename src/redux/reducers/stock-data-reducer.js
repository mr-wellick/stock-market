import { QUERY_TERM } from '../constants/';

function stockDataReducer(state = { data: {}, queryTerm: '', isFetching: false }, action) {
  if (action.type === QUERY_TERM) {
    return {
      ...state,
      queryTerm: action.payload.queryTerm
    };
  }

  return state;
}

export default stockDataReducer;
