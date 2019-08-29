import queryStockTickersEpic from './query-stock-tickers-epic.js';
import fetchStockDataEpic from './fetch-stock-data-epic.js';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(queryStockTickersEpic, fetchStockDataEpic);
