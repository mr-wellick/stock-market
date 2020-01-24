import { QUERY_TERM, START_FETCH, FETCH_SUCCESS } from '../constants/';
import { FETCH_ERROR } from '../constants/';

function stockDataReducer(
  state = { data: {}, queryTerm: '', isFetching: false, error: {}, activeStock: '' },
  action
) {
  if (action.type === QUERY_TERM) {
    return {
      ...state,
      queryTerm: action.payload.queryTerm
    };
  }

  if (action.type === START_FETCH) {
    return {
      ...state,
      isFetching: action.payload.isFetching
    };
  }

  if (action.type === FETCH_SUCCESS) {
    return {
      ...state,
      data: {
        ...state.data,
        [action.payload.data.company.symbol]: action.payload.data
      },
      isFetching: action.payload.isFetching,
      activeStock: action.payload.data.company.symbol
    };
  }

  if (action.type === FETCH_ERROR) {
    return {
      ...state,
      error: action.payload.error,
      isFetching: action.payload.isFetching
    };
  }

  return state;
}

export default stockDataReducer;
