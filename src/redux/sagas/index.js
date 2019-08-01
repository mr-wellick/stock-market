import fetchIEXWatcher from './fetch-iex-data.js';
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([fetchIEXWatcher()]);
}

export default rootSaga;
