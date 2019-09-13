import React from 'react';
import { useSelector } from 'react-redux';
import { DownloadCSV } from '../download-csv/';
import './style.scss';

const CompanyName = () => {
  const { stockData, activeStock } = useSelector(state => state.stockDataReducer);

  if (!stockData[activeStock]['Meta Data']) {
    return null;
  }

  return (
    <div className="company-info-container">
      <p className="company-name">[{stockData[activeStock]['Meta Data']['2. Symbol']}]</p>
      <DownloadCSV />
    </div>
  );
};

export default CompanyName;
