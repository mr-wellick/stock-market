import React from 'react';
import { GGPLOT } from 'react-d3-ggplot';
import { Line } from 'react-d3-ggplot';
import { useHistoricalData } from '../../hooks/';
import './style.scss';

const HistoricalChart = () => {
  const data = useHistoricalData();

  if (!data) {
    return null;
  }

  return (
    <GGPLOT {...data}>
      <Line />
    </GGPLOT>
  );
};

export default HistoricalChart;
