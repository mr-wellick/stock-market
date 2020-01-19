import React from 'react';
//import { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
import { SearchIcon } from '../../icons/';
import './style.scss';

const StockFetcher = () => {
  //const { stockData } = useSelector(state => state.stockDataReducer);
  //const dispatch = useDispatch();

  return (
    <div className="stock-form-container">
      <form className="stock-form" autoComplete="off" onSubmit={null}>
        <SearchIcon />
        <input
          className="stock-input"
          type="text"
          placeholder="Search Symbols"
          required
          onChange={e => console.log(e.target.value)}
        />
      </form>
    </div>
  );
};

export default StockFetcher;
