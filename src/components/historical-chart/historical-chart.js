import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { StockSypnosis } from '../stock-sypnosis/';
import './style.scss';

const useHistoricalData = () => {
  const { data, activeStock } = useSelector((state) => state.stockDataReducer);

  if (data[activeStock]) {
    const { chart } = data[activeStock];

    if (chart.length > 0) {
      return {
        data: chart,
        height: window.innerHeight * 0.6,
        width: window.innerWidth * 0.8,
        margin: { top: 0, right: 0, left: 0, bottom: 0 },
      };
    }
  }

  return null;
};

const HistoricalChart = () => {
  const historicalData = useHistoricalData();
  const { data, activeStock } = useSelector((state) => state.stockDataReducer);

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
    <div className="px-4">
      <StockSypnosis />
      <LineChart {...historicalData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <Tooltip />
        <Line type="monotone" dataKey="close" stroke={trend} />
      </LineChart>
    </div>
  );
};

export default HistoricalChart;
