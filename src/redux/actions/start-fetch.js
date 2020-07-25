import { START_FETCH } from '../constants/';

function startFetch(queryTerm) {
  return {
    type: START_FETCH,
    payload: { queryTerm, isFetching: true },
  };
}

export default startFetch;
