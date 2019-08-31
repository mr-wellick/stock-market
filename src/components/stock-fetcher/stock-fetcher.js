import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dropdown } from '../dropdown/';
import { SearchIcon } from '../../icons/';
import { queryStockTickers } from '../../redux/';
import { fetchStockData } from '../../redux/';
import { stockTickersSuccess } from '../../redux/';
import { toggleModal } from '../../redux/';
import { validate } from '../../utilities/';
import './style.scss';

const useHandler = () => {
  const { queryTerm, tickers } = useSelector(state => state.stockTickersReducer);
  const { stockData } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();

  return e => {
    e.preventDefault();
    const validQueryTerm = validate(queryTerm);
    let inBestMatches;

    // We want to check that the user input matches one entry in tickers.bestMatches, so we only
    // query valid stock ticker entries and restrict user input as much as possible.
    if (validQueryTerm && tickers.bestMatches) {
      inBestMatches = tickers.bestMatches.filter(ticker => ticker['1. symbol'] === validQueryTerm);
    }

    // inBestMatches could either be undefined or an empty array.
    // We also need to make sure we don't retrieve the same stock twice.
    if (inBestMatches && inBestMatches.length > 0 && !stockData[validQueryTerm]) {
      dispatch(fetchStockData(validQueryTerm));
    } else {
      dispatch(
        toggleModal({
          error: `Looks like you either entered an incorrect stock ticker or the stock ticker
          you are attempting to retrieve is already in your list. Please double check your input and
          try again.`
        })
      );
    }

    // clear previous tickers and clear input field
    document.querySelector('.stock-input').value = '';
    dispatch(stockTickersSuccess({}));
  };
};

const StockFetcher = () => {
  const { stockData } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();
  const handler = useHandler();

  useEffect(() => {
    const stockLength = Object.keys(stockData).length;

    if (stockLength === 0) {
      //dispatch(fetchStockData('TSLA'));
    }
  }, []);

  return (
    <div className="stock-form-container">
      <form className="stock-form" autoComplete="off" onSubmit={handler}>
        <SearchIcon />
        <input
          className="stock-input"
          type="text"
          placeholder="Search Symbols"
          required
          onChange={e => dispatch(queryStockTickers(e.target.value))}
        />
      </form>
      <Dropdown />
    </div>
  );
};

export default StockFetcher;
