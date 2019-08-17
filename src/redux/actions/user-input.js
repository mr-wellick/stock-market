import { USER_INPUT } from '../constants/';

const userInput = input => {
  return {
    type: USER_INPUT,
    payload: { input }
  };
};

export default userInput;
