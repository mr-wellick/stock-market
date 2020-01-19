import { QUERY_TERM } from '../constants/';

function querying(queryTerm) {
  return {
    type: QUERY_TERM,
    payload: { queryTerm }
  };
}

export default querying;
