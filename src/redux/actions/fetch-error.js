import { FETCH_ERROR } from '../constants/';

function fetchError(error) {
  return {
    type: FETCH_ERROR,
    payload: { error, isFetching: false }
  };
}

export default fetchError;
