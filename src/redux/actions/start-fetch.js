import { START_FETCH } from '../constants/';

function startFetch(queryTerm) {
  return {
    type: START_FETCH,
    payload: { queryTerm }
  };
}

export default startFetch;
