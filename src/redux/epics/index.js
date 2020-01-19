import fetchStockDataEpic from './fetch-stock-data-epic.js';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(fetchStockDataEpic);
