import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { FETCH_STOCK_DATA } from '../constants/';
import { fetchStockDataSuccess } from '../actions/';

const fetchStockDataEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_STOCK_DATA),
    mergeMap(action =>
      ajax
        .getJSON(
          `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${action.payload.stockName}&apikey=${process.env.ALPHA_VANTAGE_KEY}`
        )
        .pipe(map(response => fetchStockDataSuccess(response)))
    )
  );
};

export default fetchStockDataEpic;
