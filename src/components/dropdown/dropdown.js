import React from 'react';
import { useSelector } from 'react-redux';
import { symbols } from '../../mock-data/symbols.js';
import { validate } from '../../utilities/';
import './style.scss';

const Dropdown = () => {
  const { input } = useSelector(state => state.uiReducer);
  const validInput = validate(input);

  // will remove after full implementation
  if (symbols) return null;

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
