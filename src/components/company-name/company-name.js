import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyName = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  if (!data[activeStock]) {
    return;
  }

  return (
    <div className="company-info-container">
      <p className="company-name">[{data[activeStock]['Meta Data']['2. Symbol']}]</p>
      <p>{data[activeStock]['Meta Data']['3. Last Refreshed']}</p>
    </div>
  );
};

export default CompanyName;
