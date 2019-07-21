import { SIDEBAR_TOGGLED } from '../constants/';

function uiReducer(state = { className: '' }, action) {
  if (action.type === SIDEBAR_TOGGLED) {
    return {
      ...state,
      className: action.className
    };
  }

  return state;
}

export default uiReducer;
