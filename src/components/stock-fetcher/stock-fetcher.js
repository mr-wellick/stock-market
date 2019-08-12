import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { validate } from '../../utilities/';
import { SearchIcon } from '../../icons/';
import './style.scss';

const StockFetcher = () => {
  const [stockName, setStockName] = useState('');
  const { data } = useSelector(state => state.iexReducer);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const validStockName = validate(stockName);

    if (validStockName && !data[validStockName]) {
      dispatch({ type: 'FETCH_REQUESTED', validStockName });
    } else {
      alert('There was an error processing your request. Please try again.');
    }

    document.querySelector('.stock-fetcher__input').value = '';
  };

  return (
    <form className="stock-fetcher__form" autoComplete="off" onSubmit={onSubmit}>
      <SearchIcon />
      <input
        onChange={event => setStockName(event.target.value)}
        className="stock-fetcher__input"
        type="text"
        required
        disabled
      />
    </form>
  );
};

export default StockFetcher;
