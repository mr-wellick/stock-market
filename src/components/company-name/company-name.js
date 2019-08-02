import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyName = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  if (Object.keys(data).length === 0 || !data[activeStock]) return null;

  const { companyName, symbol, close, latestTime } = data[activeStock].quote;

  return (
    <div className="company-name-container">
      <p>
        <span className="company-name">{companyName}</span>
        <span className="company-symbol">[{symbol}]</span>
        <span className="company-close">{close}</span>
      </p>
      <p>{latestTime}</p>
    </div>
  );
};

export default CompanyName;
