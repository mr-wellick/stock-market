import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const Dropdown = () => {
  const { symbols } = useSelector(state => state.uiReducer);

  if (!symbols.bestMatches) return null;
  if (symbols.bestMatches && symbols.bestMatches.length === 0) return null;

  const { bestMatches } = symbols;

  return (
    <ul className="symbol-list">
      {/* eslint-disable */}
      {bestMatches.map(stock => (
        <li className="symbol-item" key={stock['1. symbol']} data-symbol={stock['1. symbol']}>
          <p className="symbol-ticker">
            {stock['1. symbol']}
            <span className="symbol-dash">-</span>
          </p>
          <p className="symbol-name">{stock['2. name']}</p>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
