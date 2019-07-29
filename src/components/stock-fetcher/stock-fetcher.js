import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchIEXData } from '../../redux/';
import { validate } from '../../utilities/';
import './style.scss';

const StockFetcher = () => {
  const [stockName, setStockName] = useState('');
  const { data } = useSelector(state => state.iexReducer);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const validStockName = validate(stockName);

    if (validStockName && !data[validStockName]) {
      dispatch(fetchIEXData(validStockName));
    } else {
      console.log('wooops');
    }

    document.querySelector('.stock-fetcher__input').value = '';
  };

  return (
    <form className="stock-fetcher__form" autoComplete="off" onSubmit={onSubmit}>
      <input
        onChange={event => setStockName(event.target.value)}
        className="stock-fetcher__input"
        type="text"
      />
    </form>
  );
};

export default StockFetcher;
