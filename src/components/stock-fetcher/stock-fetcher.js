import React from 'react';
import { useEffect } from 'react';
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

const StockFetcher = props => {
  const { data } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();
  const handler = useHandler();

  useEffect(() => {
    const stocks = Object.keys(data);

    if (stocks.length <= 0) {
      dispatch(startFetch('tsla'));
    }
  }, []);

  return (
    <div className={`stock-fetcher-container ${props.className}`}>
      <SearchIcon />
      <form className="stock-form" autoComplete="off" onSubmit={handler}>
        <input
          className="stock-input"
          type="text"
          placeholder="Search Symbols"
          required
          onChange={e => dispatch(querying(e.target.value))}
        />
      </form>
    </div>
  );
};

export default StockFetcher;
