import { SET_USER_INPUT } from "../Constants/";

const setUserInput = function(input) {
  return dispatch => {
    dispatch({ type: USER_STOCK_INPUT, input });
  };
};

export default setUserInput;
