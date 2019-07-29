import { SIDEBAR_TOGGLED } from '../constants/';
import store from '../store.js';

const toggleSidebar = () => {
  const { className } = store.getState().uiReducer;

  if (className === '') {
    return {
      type: SIDEBAR_TOGGLED,
      payload: { className: 'toggled' }
    };
  }

  return {
    type: SIDEBAR_TOGGLED,
    payload: { className: '' }
  };
};

export default toggleSidebar;
