import React from 'react';
import { setActiveStock } from '../../redux/';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TrashIcon } from '../../icons/';
import './style.scss';

const StockSelector = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);
  const dispatch = useDispatch();
  const stockNames = Object.keys(data);

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
              onChange={() => dispatch(setActiveStock(stock))}
              checked={activeStock === stock}
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
