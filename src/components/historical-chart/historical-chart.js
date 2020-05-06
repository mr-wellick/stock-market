import React from 'react';
import { useHistoricalData } from '../../hooks/';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';
import './style.scss';

const HistoricalChart = () => {
  const historicalData = useHistoricalData();
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  if (!historicalData) {
    return null;
  }

  const { quote } = data[activeStock];
  let trend;

  if (quote) {
    trend = quote.change < 0 ? '#f72121' : '#19be87';
  } else {
    trend = null;
  }

  return (
    <LineChart {...historicalData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="close" stroke={trend} />
    </LineChart>
  );
};

export default HistoricalChart;
