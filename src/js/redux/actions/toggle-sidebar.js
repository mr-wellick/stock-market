import { SIDEBAR_TOGGLED } from '../constants/';
import store from '../store.js';

const toggleSidebar = function() {
  return dispatch => {
    const { className } = store.getState().uiReducer;

    if (className === '') {
      dispatch({ type: SIDEBAR_TOGGLED, payload: { className: 'toggled' } });
    } else {
      dispatch({ type: SIDEBAR_TOGGLED, payload: { className: '' } });
    }
  };
};

export default toggleSidebar;
