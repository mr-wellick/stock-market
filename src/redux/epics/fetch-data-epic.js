import { ajax } from 'rxjs/ajax';
//import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
//import { fetchDataSuccess } from '../actions/';
import { START_FETCH } from '../constants';

const fetchDataEpic = action$ => {
  return action$.pipe(
    ofType(START_FETCH),
    mergeMap(action => {
      // NOTE: change input to queryTerm
      const iex = `https://cloud.iexapis.com/v1/stock/${action.payload.input}/batch?types=quote,company,news,chart&range=1m&last=10&token=${process.env.IEX_KEY}`;
      return ajax.getJSON(iex).pipe(
        //map(response => fetchDataSuccess(response)),
        catchError(e => console.log(e))
      );
    })
  );
};

export default fetchDataEpic;
