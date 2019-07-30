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
    <form>
      {stockNames.map(stock => (
        <label key={stock}>
          <input
            type="radio"
            name="active-stock"
            value={stock}
            onChange={() => dispatch(setActiveStock(stock))}
            checked={activeStock === stock}
          />
          {stock}
        </label>
      ))}
    </form>
  );
};

export default StockSelector;
