import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dropdown } from '../dropdown/';
import { SearchIcon } from '../../icons/';
import { queryStockTickers } from '../../redux/';
import { fetchStockData } from '../../redux/';
import { stockTickersSuccess } from '../../redux/';
import { validate } from '../../utilities/';
import './style.scss';

const useHandler = () => {
  const { queryTerm } = useSelector(state => state.stockTickersReducer);
  const { stockData } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();

  return e => {
    e.preventDefault();
    const validQueryTerm = validate(queryTerm);

    if (!stockData[validQueryTerm]) {
      dispatch(fetchStockData(validQueryTerm));
    } else {
      console.log(`${validQueryTerm} is already in your list.`);
    }

    // clear previous tickers and clear input field
    document.querySelector('.stock-input').value = '';
    dispatch(stockTickersSuccess({}));
  };
};

const StockFetcher = () => {
  const dispatch = useDispatch();
  const handler = useHandler();

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
