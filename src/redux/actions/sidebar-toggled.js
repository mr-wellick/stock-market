import { SIDEBAR_TOGGLED } from '../constants/';

const sidebarToggled = toggle => {
  if (toggle) {
    return {
      type: SIDEBAR_TOGGLED,
      payload: { toggled: 'is-open' }
    };
  }

  return {
    type: SIDEBAR_TOGGLED,
    payload: { toggled: '' }
  };
};

export default sidebarToggled;
