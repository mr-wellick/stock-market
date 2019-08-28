import queryStockTickersEpic from './query-stock-tickers-epic.js';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(queryStockTickersEpic);
