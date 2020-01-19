import { TOGGLE_MODAL } from '../constants/';

function uiReducer(state = { message: {} }, action) {
  if (action.type === TOGGLE_MODAL) {
    return {
      ...state,
      message: action.payload.message
    };
  }

  return state;
}

export default uiReducer;
