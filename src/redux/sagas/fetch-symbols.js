import { call } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { BEST_MATCHES } from '../constants/';
import { fetchError } from '../actions/';

export function* fetchSymbols({ input }) {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=${process.env.ALPHA_VANTAGE_KEY}`;
  const response = yield call(fetch, url);

  try {
    const data = yield response.json();

    if (data['bestMatches']) {
      yield put({
        type: BEST_MATCHES,
        payload: { ...data }
      });
    } else {
      yield put({
        type: BEST_MATCHES,
        payload: {}
      });
    }
  } catch (error) {
    yield put(fetchError('Something went wrong, please try again.'));
  }
}

function* fetchSymbolsWatcher() {
  yield takeLatest('SYMBOLS_REQUESTED', fetchSymbols);
}

export default fetchSymbolsWatcher;
