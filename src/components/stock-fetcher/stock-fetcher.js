import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dropdown } from '../dropdown/';
import { SearchIcon } from '../../icons/';
import { queryStockTickers } from '../../redux/';
//import { fetchStockData } from '../../redux/';
import useHandler from './use-handler.js';
import './style.scss';

const StockFetcher = () => {
  const { stockData } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();
  const handler = useHandler();

  useEffect(() => {
    const stockLength = Object.keys(stockData).length;

    if (stockLength === 0) {
      //dispatch(fetchStockData('TSLA'));
    }
  }, [stockData, dispatch]); // complains, when leaving out dipatch.

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
