import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const StockSypnosis = () => {
  const { data, activeStock } = useSelector((state) => state.stockDataReducer);

  if (!data[activeStock] || !data[activeStock].quote) {
    return null;
  }

  const { companyName, symbol, change, changePercent, close } = data[activeStock].quote;
  const trend = change < 0 ? 'is-down' : 'is-up';

  return (
    <div className="py-4">
      <p className="text-2xl">
        {companyName} [{symbol}]
      </p>
      <span className="text-4xl">{close}</span>
      <span className="company-change text-base pl-2" id={trend}>
        {change}({changePercent})
      </span>
    </div>
  );
};

export default StockSypnosis;
