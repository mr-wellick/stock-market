import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../../redux/';
import './style.scss';

const useHandler = () => {
  const dispatch = useDispatch();

  return e => {
    const { symbol } = e.target.dataset;
    dispatch(fetchStockData(symbol));
  };
};

const Dropdown = () => {
  const { tickers } = useSelector(state => state.stockTickersReducer);
  const handler = useHandler();

  if (!tickers.bestMatches) return null;
  if (tickers.bestMatches.length === 0) return null;

  return (
    <ul className="symbol-list">
      {/* eslint-disable */}
      {tickers.bestMatches.map(stock => (
        <li
          className="symbol-item"
          key={stock['1. symbol']}
          data-symbol={stock['1. symbol']}
          onClick={handler}
        >
          <p className="symbol-ticker" data-symbol={stock['1. symbol']}>
            {stock['1. symbol']}
          </p>
          <p className="symbol-name" data-symbol={stock['1. symbol']}>
            {stock['2. name']}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
