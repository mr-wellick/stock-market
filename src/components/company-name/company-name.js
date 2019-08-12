import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyName = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  if (Object.keys(data).length === 0 || !data[activeStock]) return null;

  const { companyName, symbol, close, change, changePercent } = data[activeStock].quote;
  const trend = change < 0 ? 'trend-down' : 'trend-up';

  return (
    <div className="company-info-container">
      <p className="company-name-container">
        <span className="company-name">{companyName}</span>
        <span className="company-symbol">[{symbol}]</span>
      </p>
      <p>
        <span className="company-close">{close}</span>
        <span className={trend}>{change}</span>
        <span className={trend}>({changePercent})</span>
      </p>
    </div>
  );
};

export default CompanyName;
