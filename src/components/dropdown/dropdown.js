import React from 'react';
import { useSelector } from 'react-redux';
import useHandler from './use-handler.js';
import './style.scss';

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
