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
  const { queryTerm } = useSelector(state => state.stockTickersReducer);
  const { stockData } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();

  return e => {
    e.preventDefault();
    const validQueryTerm = validate(queryTerm);

    if (validQueryTerm && !stockData[validQueryTerm]) {
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
      dispatch(fetchStockData('TSLA'));
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
