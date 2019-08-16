import uiReducer from '../ui-reducer.js';
import { toggleSidebar } from '../../actions';

test('uiReducer returns class name of "toggled"', () => {
  const action = toggleSidebar(true);
  const initialState = { className: '' };
  const newState = uiReducer(initialState, action);

  expect(newState.className).toBe(action.payload.className);
});

test('uiReducer returns initialState if no active is passed', () => {
  const action = {};
  const initialState = { className: '' };
  const newState = uiReducer(initialState, action);

  expect(newState.className).toBe(initialState.className);
});
