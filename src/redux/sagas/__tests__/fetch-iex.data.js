import { call } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { fetchIEXData } from '../fetch-iex-data.js';

test('Generator', () => {
  const iterator = fetchIEXData({ validStockName: 'TSLA' });
});
