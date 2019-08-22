import React from 'react';
import './style.scss';

const Dropdown = () => {
  const symbols = [];

  if (symbols.length === 0) return null;

  return (
    <ul className="symbol-list">
      {symbols.map(stock => (
        <li className="symbol-item" key={stock.split(' - ')[0]}>
          <p className="symbol-ticker">
            {stock.split(' - ')[0]}
            <span className="symbol-dash">-</span>
          </p>
          <p className="symbol-name">{stock.split(' - ')[1]}</p>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
