import fetchDataEpic from './fetch-data-epic.js';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(fetchDataEpic);
