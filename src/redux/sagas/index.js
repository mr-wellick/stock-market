import fetchIEXWatcher from './fetch-iex-data.js';
import fetchSymbolsWatcher from './fetch-symbols.js';
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([fetchIEXWatcher(), fetchSymbolsWatcher()]);
}

export default rootSaga;
