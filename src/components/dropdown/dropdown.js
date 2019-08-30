import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../../redux/';
import { stockTickersSuccess } from '../../redux/';
import { toggleModal } from '../../redux/';
import './style.scss';

const useHandler = () => {
  const dispatch = useDispatch();
  const { stockData } = useSelector(state => state.stockDataReducer);

  return e => {
    const { symbol } = e.target.dataset;

    if (!stockData[symbol]) {
      dispatch(fetchStockData(symbol));
    } else {
      dispatch(
        toggleModal({
          error: `Looks like you either entered an incorrect stock ticker or the stock ticker
          you are attempting to retrieve is already in your list. Please double check your input and
          try again.`
        })
      );
    }

    // clear previous results and clear input field
    dispatch(stockTickersSuccess({}));
    document.querySelector('.stock-input').value = '';
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
