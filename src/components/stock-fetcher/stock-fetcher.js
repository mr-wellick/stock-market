import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SearchIcon } from '../../icons/';
import { querying } from '../../redux/';
import { startFetch } from '../../redux/';
import './style.scss';

const useHandler = () => {
  const { queryTerm } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();

  return e => {
    e.preventDefault();
    dispatch(startFetch(queryTerm));

    const input = document.querySelector('.stock-input');
    input.value = '';
  };
};

const StockFetcher = () => {
  const dispatch = useDispatch();
  const handler = useHandler();

  return (
    <form className="stock-form" autoComplete="off" onSubmit={handler}>
      <SearchIcon />
      <input
        className="stock-input"
        type="text"
        placeholder="Search Symbols"
        required
        onChange={e => dispatch(querying(e.target.value))}
      />
    </form>
  );
};

export default StockFetcher;
