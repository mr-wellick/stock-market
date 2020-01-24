import React from 'react';
import { GGPLOT } from 'react-d3-ggplot';
import { Line } from 'react-d3-ggplot';
import { useHistoricalData } from '../../hooks/';
import { useSelector } from 'react-redux';
import './style.scss';

const HistoricalChart = () => {
  const historicalData = useHistoricalData();
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  if (!historicalData) {
    return null;
  }

  const { quote } = data[activeStock];
  const trend = quote.change < 0 ? '#f72121' : '#19be87';

  return (
    <GGPLOT {...historicalData}>
      <Line fill={trend} />
    </GGPLOT>
  );
};

export default HistoricalChart;
