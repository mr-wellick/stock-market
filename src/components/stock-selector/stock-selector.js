import React from 'react';
import { setActiveStock } from '../../redux/';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './style.scss';

const StockSelector = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);
  const dispatch = useDispatch();
  const stockNames = Object.keys(data);

  if (stockNames.length === 0) return null;

  return (
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
            <button className="stock-list__btn">x</button>
          </label>
        </div>
      ))}
    </form>
  );
};

export default StockSelector;
