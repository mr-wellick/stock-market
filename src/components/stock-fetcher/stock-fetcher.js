import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { validate } from '../../utilities/';
import { setActiveStock } from '../../redux/';
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

  // need to refactor this code
  useEffect(() => {
    dispatch(setActiveStock('TSLA'));
    dispatch({ type: 'FETCH_REQUESTED', validStockName: 'TSLA' });
  }, []);

  return (
    <form className="stock-fetcher__form" autoComplete="off" onSubmit={onSubmit}>
      <input
        onChange={event => setStockName(event.target.value)}
        className="stock-fetcher__input"
        type="text"
        required
      />
    </form>
  );
};

export default StockFetcher;
