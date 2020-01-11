import React from 'react';
import { useSelector } from 'react-redux';
//import { DownloadCSV } from '../download-csv/';
import './style.scss';

const CompanyName = () => {
  const { stockData, activeStock } = useSelector(state => state.stockDataReducer);

  if (!stockData[activeStock]) {
    return null;
  }

  const { companyName, symbol, change, changePercent, close } = stockData[activeStock].quote;
  const trend = change < 0 ? 'is-down' : 'is-up';

  return (
    <div className="company-info-container">
      <p className="company-name">
        {companyName}[{symbol}]{' '}
      </p>
      <span className="company-close">{close}</span>
      <span className="company-change" id={trend}>
        {change}({changePercent})
      </span>
    </div>
  );
};

export default CompanyName;
