import uiReducer from '../ui-reducer.js';
import { sidebarToggled } from '../../actions/';

test('uiReducer default state', () => {
  const initialState = { toggled: '' };
  // here we just create an invalid action to trigger the last return statement in uiReducer
  const newAction = { type: 'INVALID_ACTION', payload: {} };
  const newState = uiReducer(initialState, newAction);

  // invalid actions will result in just returning the initialState
  expect(newState.toggled).toBe(initialState.toggled);
});

test('uiReducer SIDEBAR_TOGGLED action', () => {
  const initialState = { toggled: '' };
  const newAction = sidebarToggled(true);
  const newState = uiReducer(initialState, newAction);

  // newState returned by reducer should equal newAction return by action creator
  expect(newState.toggled).toBe(newAction.payload.toggled);
});
