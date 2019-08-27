import { SIDEBAR_TOGGLED } from '../constants/';

function uiReducer(state = { toggled: '' }, action) {
  if (action.type === SIDEBAR_TOGGLED) {
    return {
      ...state,
      toggled: action.payload.toggled
    };
  }

  return state;
}

export default uiReducer;
