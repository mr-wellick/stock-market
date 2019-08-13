import React from 'react';
import { symbols } from '../../mock-data/symbols.js';
import './style.scss';

const Dropdown = () => {
  return (
    <ul className="symbol-list">
      {symbols.slice(0, 20).map(stock => (
        <li className="symbol-item" key={stock.name}>
          <p className="symbol-ticker">
            {stock.symbol}
            <span className="symbol-dash">-</span>
          </p>
          <p className="symbol-name">{stock.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
