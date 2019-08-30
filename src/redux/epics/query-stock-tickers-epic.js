import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { QUERY_STOCK_TICKERS } from '../constants/';
import { stockTickersSuccess } from '../actions/';

const queryStockTickersEpic = action$ => {
  return action$.pipe(
    ofType(QUERY_STOCK_TICKERS),
    mergeMap(action =>
      ajax
        .getJSON(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${action.payload.queryTerm}&apikey=${process.env.ALPHA_VANTANGE_KEY}`
        )
        .pipe(
          map(response => stockTickersSuccess(response)),
          takeUntil(action$.pipe(ofType(QUERY_STOCK_TICKERS)))
        )
    )
  );
};

export default queryStockTickersEpic;