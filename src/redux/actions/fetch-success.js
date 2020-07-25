import { FETCH_SUCCESS } from '../constants/';

function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: { data, isFetching: false },
  };
}

export default fetchSuccess;
