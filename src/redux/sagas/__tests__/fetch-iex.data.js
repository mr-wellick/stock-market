import { call } from 'redux-saga/effects';
//import { put } from 'redux-saga/effects';
import { fetchIEXData } from '../fetch-iex-data.js';
import fetch from 'node-fetch';

// first redux-saga test. getting the hang of it
test('Generator', () => {
  const url =
    'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=TSLA&apikey=undefined';
  const iterator = fetchIEXData({ validStockName: 'TSLA' });

  expect(iterator.next().value).toMatchObject(call(fetch, url));
});
