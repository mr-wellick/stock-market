import { call } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { FETCH_IEX_DATA } from '../constants/';
import { FETCH_ERROR } from '../constants/';
import { SET_ACTIVE_STOCK } from '../constants/';

function* fetchIEXData({ validStockName }) {
  const url = `https://cloud.iexapis.com/stable/stock/${validStockName}/batch?types=income,stats,company,news,quote,chart&range=3m&token=${process.env.IEX_KEY}`;
  const response = yield call(fetch, url);

  try {
    const data = yield response.json();

    yield put({ type: SET_ACTIVE_STOCK, payload: { activeStock: validStockName } });
    yield put({ type: FETCH_IEX_DATA, payload: { [validStockName]: data } });
  } catch (error) {
    yield put({ type: FETCH_ERROR, payload: { error: `Invalid stock ticker: ${validStockName}` } });
  }
}

function* fetchIEXWatcher() {
  yield takeLatest('FETCH_REQUESTED', fetchIEXData);
}

export default fetchIEXWatcher;
