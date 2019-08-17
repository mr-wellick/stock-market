import { SIDEBAR_TOGGLED } from '../constants/';
import { USER_INPUT } from '../constants/';

function uiReducer(state = { className: '', input: '' }, action) {
  if (action.type === SIDEBAR_TOGGLED) {
    return {
      ...state,
      className: action.payload.className
    };
  }

  if (action.type === USER_INPUT) {
    return {
      ...state,
      input: action.payload.input
    };
  }

  return state;
}

export default uiReducer;
