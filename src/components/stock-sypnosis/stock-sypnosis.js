import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const StockSypnosis = () => {
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  if (!data[activeStock]) {
    return null;
  }

  const { companyName, symbol, change, changePercent, close } = data[activeStock].quote;
  const trend = change < 0 ? 'is-down' : 'is-up';

  return (
    <div className="company-info-container">
      <p className="company-name">
        {companyName} [{symbol}]
      </p>
      <span className="company-close">{close}</span>
      <span className="company-change" id={trend}>
        {change}({changePercent})
      </span>
    </div>
  );
};

export default StockSypnosis;
