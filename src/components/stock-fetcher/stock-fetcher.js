import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchIcon } from '../../icons/';
import { userInput } from '../../redux/';
import './style.scss';

const StockFetcher = () => {
  const dispatch = useDispatch();

  return (
    <form className="stock-fetcher__form" autoComplete="off">
      <SearchIcon />
      <input
        onChange={event => dispatch(userInput(event.target.value))}
        className="stock-fetcher__input"
        type="text"
        placeholder="Search Symbols"
        required
      />
    </form>
  );
};

export default StockFetcher;
