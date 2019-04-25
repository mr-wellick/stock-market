import { FETCH_IEX_ERROR } from "../Constants/";

const fetchIEXError = function(error) {
  return dispatch => {
    dispatch({ type: FETCH_IEX_ERROR, error });
  };
};

export default fetchIEXError;
