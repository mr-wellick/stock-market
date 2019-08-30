import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActiveStock } from '../../redux/';
import { TrashIcon } from '../../icons/';
import { deleteStock } from '../../redux/';
import './style.scss';

const useHandler = () => {
  const dispatch = useDispatch();
  const { stockData } = useSelector(state => state.stockDataReducer);

  return e => {
    e.preventDefault();
    const { symbol } = e.target.dataset;
    const stockNames = Object.keys(stockData);

    if (stockNames.length > 1) {
      dispatch(deleteStock(symbol));
      dispatch(setActiveStock(stockNames[0]));
    } else {
      console.log('You cannot delete all of your stocks!');
    }
  };
};

const StockSelector = () => {
  const handler = useHandler();
  const dispatch = useDispatch();
  const { stockData, activeStock } = useSelector(state => state.stockDataReducer);
  const stockNames = Object.keys(stockData);

  if (stockNames.length === 0) return null;

  return (
    <div className="list-container">
      <div className="stock-header">
        <p className="stock-header__name">Stock List</p>
      </div>
      <form className="stock-list">
        {stockNames.map(stock => (
          <div key={stock} className="stock-list__container">
            <input
              className="stock-list__input"
              type="radio"
              name="stock-selector"
              id={stock}
              checked={activeStock === stock}
              onChange={() => dispatch(setActiveStock(stock))}
            />
            <label className="stock-list__label" htmlFor={stock}>
              {stock}
              <button className="stock-list__btn" data-symbol={stock} onClick={handler}>
                <TrashIcon symbol={stock} />
              </button>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default StockSelector;
