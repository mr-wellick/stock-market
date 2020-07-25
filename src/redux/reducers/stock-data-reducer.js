import { QUERY_TERM } from '../constants/';
import { START_FETCH } from '../constants/';
import { FETCH_SUCCESS } from '../constants/';
import { FETCH_ERROR } from '../constants/';
import { ACTIVE_STOCK } from '../constants/';
import { DELETE_STOCK } from '../constants/';
import { TOGGLE_MODAL } from '../constants/';

function stockDataReducer(
  state = {
    data: {},
    queryTerm: '',
    isFetching: false,
    error: {},
    activeStock: '',
    modalMessage: {},
  },
  action
) {
  if (action.type === QUERY_TERM) {
    return {
      ...state,
      queryTerm: action.payload.queryTerm,
    };
  }

  if (action.type === START_FETCH) {
    return {
      ...state,
      isFetching: action.payload.isFetching,
    };
  }

  if (action.type === FETCH_SUCCESS) {
    return {
      ...state,
      data: {
        ...state.data,
        [action.payload.data.company.symbol]: action.payload.data,
      },
      isFetching: action.payload.isFetching,
      activeStock: action.payload.data.company.symbol,
    };
  }

  if (action.type === FETCH_ERROR) {
    return {
      ...state,
      error: action.payload.error,
      isFetching: action.payload.isFetching,
    };
  }

  if (action.type === ACTIVE_STOCK) {
    return {
      ...state,
      activeStock: action.payload.activeStock,
    };
  }

  if (action.type === DELETE_STOCK) {
    const updatedStocks = {};

    for (let stockName in state.data) {
      if (stockName !== action.payload.stockName) {
        updatedStocks[stockName] = state.data[stockName];
      }
    }

    return {
      ...state,
      data: updatedStocks,
    };
  }

  if (action.type === TOGGLE_MODAL) {
    return {
      ...state,
      modalMessage: action.payload.message,
    };
  }

  return state;
}

export default stockDataReducer;
