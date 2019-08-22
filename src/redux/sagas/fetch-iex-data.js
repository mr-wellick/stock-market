import { call } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { FETCH_IEX_DATA } from '../constants/';
import { fetchError } from '../actions/';
//import fetch from 'node-fetch';

export function* fetchIEXData({ validStockName }) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${validStockName}&apikey=${process.env.ALPHA_VANTAGE_KEY}`;
  const response = yield call(fetch, url);

  try {
    const data = yield response.json();

    if (data['Monthly Adjusted Time Series'])
      yield put({ type: FETCH_IEX_DATA, payload: { [validStockName]: data } });
    else yield put(fetchError('Incorrect stock ticker.'));
  } catch (error) {
    yield put(fetchError('Something went wrong, please try again.'));
  }
}

function* fetchIEXWatcher() {
  yield takeLatest('FETCH_REQUESTED', fetchIEXData);
}

export default fetchIEXWatcher;
