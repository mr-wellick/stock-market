import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyName = () => {
  const { stockName, stockData } = useSelector(state => state.stockDataReducer);

  if (!stockData[stockName]['Meta Data']) {
    return;
  }

  return (
    <div className="company-info-container">
      <p className="company-name">[{stockData[stockName]['Meta Data']['2. Symbol']}]</p>
      <p>{stockData[stockName]['Meta Data']['3. Last Refreshed']}</p>
    </div>
  );
};

export default CompanyName;
