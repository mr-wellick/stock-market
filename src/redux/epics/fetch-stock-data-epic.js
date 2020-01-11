import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { FETCH_STOCK_DATA } from '../constants/';
import { fetchStockDataSuccess } from '../actions/';

const fetchStockDataEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_STOCK_DATA),
    mergeMap(action => {
      const iex = `https://cloud.iexapis.com/v1/stock/${action.payload.input}/batch?types=quote,company,news,chart&range=1m&last=10&token=${process.env.IEX_KEY}`;

      return ajax.getJSON(iex).pipe(
        map(response => fetchStockDataSuccess(response)),
        catchError(error => of({ type: 'TEST', payload: error.xhr.response, error: true }))
      );
    })
  );
};

export default fetchStockDataEpic;
