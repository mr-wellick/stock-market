import React from 'react';
//import { GGPLOT } from 'react-d3-ggplot';
//import { Line } from 'react-d3-ggplot';
//import { useDimensions } from '../../hooks/';
import { useHistoricalData } from '../../hooks/';
import { CompanyName } from '../company-name/';
import './style.scss';

const HistoricalChart = () => {
  const historicalData = useHistoricalData();
  //const [dimensions] = useDimensions();

  if (!historicalData) return null;

  return (
    <div className="historical-chart">
      <CompanyName />
      {/*
      <GGPLOT data={historicalData} aes={['date', 'close']} dimensions={dimensions}>
        <Line />
      </GGPLOT>
      */}
    </div>
  );
};

export default HistoricalChart;
