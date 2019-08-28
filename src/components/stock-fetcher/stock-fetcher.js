import React from 'react';
import { SearchIcon } from '../../icons/';
import './style.scss';

const StockFetcher = () => {
  return (
    <form className="stock-form" autoComplete="off">
      <SearchIcon />
      <input className="stock-input" type="text" placeholder="Search Symbols" required />
    </form>
  );
};

export default StockFetcher;
