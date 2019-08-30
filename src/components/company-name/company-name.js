import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyName = () => {
  const { stockData, activeStock } = useSelector(state => state.stockDataReducer);

  if (!stockData[activeStock]['Meta Data']) {
    return;
  }

  return (
    <div className="company-info-container">
      <p className="company-name">[{stockData[activeStock]['Meta Data']['2. Symbol']}]</p>
      <p>{stockData[activeStock]['Meta Data']['3. Last Refreshed']}</p>
    </div>
  );
};

export default CompanyName;
