import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyName = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  if (Object.keys(data).length === 0) return null;

  const metaData = data[activeStock]['Meta Data']['1. Information'];
  const symbol = data[activeStock]['Meta Data']['2. Symbol'];

  return (
    <div className="company-name-container">
      <h1>{symbol + ' ' + metaData}</h1>
    </div>
  );
};

export default CompanyName;
