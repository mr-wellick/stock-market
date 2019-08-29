import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchIcon } from '../../icons/';
import { queryStockTickers } from '../../redux/';
import './style.scss';

const StockFetcher = () => {
  const dispatch = useDispatch();

  return (
    <form className="stock-form" autoComplete="off">
      <SearchIcon />
      <input
        className="stock-input"
        type="text"
        placeholder="Search Symbols"
        required
        onChange={e => dispatch(queryStockTickers(e.target.value))}
      />
    </form>
  );
};

export default StockFetcher;
