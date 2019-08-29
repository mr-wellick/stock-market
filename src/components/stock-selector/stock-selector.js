import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActiveStock } from '../../redux/';
import { TrashIcon } from '../../icons/';
import './style.scss';

const StockSelector = () => {
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
              <button className="stock-list__btn" disabled>
                <TrashIcon />
              </button>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default StockSelector;
