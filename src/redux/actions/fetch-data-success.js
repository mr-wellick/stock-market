import { FETCH_DATA_SUCCESS } from '../constants/';

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { data }
  };
}

export default fetchDataSuccess;
