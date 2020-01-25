import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TrashIcon } from '../../icons/';
import { selectStock } from '../../redux/';
import './style.scss';

const StockSelector = () => {
  const dispatch = useDispatch();
  const { data, activeStock } = useSelector(state => state.stockDataReducer);
  const stockNames = Object.keys(data);

  if (stockNames.length === 0) {
    return null;
  }

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
              onChange={() => dispatch(selectStock(stock))}
            />
            <label className="stock-list__label" htmlFor={stock}>
              {stock}
              <button className="stock-list__btn" data-symbol={stock} onClick={null}>
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
