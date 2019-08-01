import toggleSidebar from '../toggle-sidebar.js';
import { SIDEBAR_TOGGLED } from '../../constants/';

test('Action creator toggling main sidebar', () => {
  const className = 'toggled';
  const { type, payload } = toggleSidebar(true);

  expect(type).toBe(SIDEBAR_TOGGLED);
  expect(payload.className).toBe(className);
});

test('Action creator toggling main sidebar', () => {
  const className = '';
  const { type, payload } = toggleSidebar(false);

  expect(type).toBe(SIDEBAR_TOGGLED);
  expect(payload.className).toBe(className);
});
