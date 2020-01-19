import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
//import { catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchDataSuccess } from '../actions/';
import { FETCH_DATA_SUCCESS } from '../constants';

const fetchDataEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_DATA_SUCCESS),
    mergeMap(action => {
      const iex = `https://cloud.iexapis.com/v1/stock/${action.payload.input}/batch?types=quote,company,news,chart&range=1m&last=10&token=${process.env.IEX_KEY}`;
      return ajax.getJSON(iex).pipe(
        map(response => fetchDataSuccess(response))
        // catchError(() => ofType(FETCH_STOCK_DATA_ERROR))
      );
    })
  );
};

export default fetchDataEpic;
