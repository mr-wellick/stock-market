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
    // here we want to delete symbol from our current stock list in stockData.
    // this line helps us keep our UI in sync.
    const stockNames = Object.keys(stockData).filter(stockName => stockName !== symbol);

    // if we have one stock, we won't be allowed to delete it.
    if (stockNames.length > 0) {
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
