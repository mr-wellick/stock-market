import { SIDEBAR_TOGGLED } from '../constants/';

const toggleSidebar = toggled => {
  if (toggled) {
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
