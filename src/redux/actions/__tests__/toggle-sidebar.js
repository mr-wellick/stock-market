import toggleSidebar from '../toggle-sidebar.js';
import { SIDEBAR_TOGGLED } from '../../constants/';

// this is a bit ticky since our toggleSidebar method will return either
// an empty string '' or the following string 'toggled'
// to test this works correctly we need to dispatch an action of type SIDEBAR_TOGGLED
test('Action creator toggling main sidebar', () => {
  const toggled = 'toggled';
  const { type, payload } = toggleSidebar();

  expect(type).toBe(SIDEBAR_TOGGLED);
  expect(payload.className).toBe(toggled);
});
