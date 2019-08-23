import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchError } from '../../redux/';
import './style.scss';

const Dropdown = () => {
  const { symbols } = useSelector(state => state.uiReducer);
  const { data } = useSelector(state => state.iexReducer);
  const dispatch = useDispatch();

  if (!symbols.bestMatches) return null;
  if (symbols.bestMatches && symbols.bestMatches.length === 0) return null;

  const { bestMatches } = symbols;

  return (
    <ul className="symbol-list">
      {/* eslint-disable */}
      {bestMatches.map(stock => (
        <li
          className="symbol-item"
          key={stock['1. symbol']}
          data-symbol={stock['1. symbol']}
          onClick={event => {
            dispatch({ type: 'BEST_MATCHES', payload: {} });
            document.querySelector('.stock-fetcher__input').value = '';

            const { symbol } = event.target.dataset;

            if (!data[symbol]) {
              dispatch({ type: 'FETCH_REQUESTED', validStockName: symbol });
            } else {
              dispatch(fetchError('You entered a stock already in your list.'));
            }
          }}
        >
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
