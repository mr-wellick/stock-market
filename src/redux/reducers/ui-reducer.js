import { SIDEBAR_TOGGLED } from '../constants/';
import { TOGGLE_MODAL } from '../constants/';

function uiReducer(state = { toggled: '', message: {} }, action) {
  if (action.type === SIDEBAR_TOGGLED) {
    return {
      ...state,
      toggled: action.payload.toggled
    };
  }

  if (action.type === TOGGLE_MODAL) {
    return {
      ...state,
      message: action.payload.message
    };
  }

  return state;
}

export default uiReducer;
