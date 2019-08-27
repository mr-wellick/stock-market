import sidebarToggled from '../sidebar-toggled.js';
import { SIDEBAR_TOGGLED } from '../../constants/';

test('Action creator toggling main sidebar', () => {
  const toggled = 'is-open';
  const { type, payload } = sidebarToggled(true);

  expect(type).toBe(SIDEBAR_TOGGLED);
  expect(payload.toggled).toBe(toggled);
});

test('Action creator toggling main sidebar', () => {
  const toggled = '';
  const { type, payload } = sidebarToggled(false);

  expect(type).toBe(SIDEBAR_TOGGLED);
  expect(payload.toggled).toBe(toggled);
});
