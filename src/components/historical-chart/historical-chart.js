import React from 'react';
import { GGPLOT } from 'react-d3-ggplot';
import { Line } from 'react-d3-ggplot';
import { useSelector } from 'react-redux';
import { CompanyName } from '../company-name/';
import { Loader } from '../loader/';
import { useDimensions } from '../../hooks/';
import { useHistoricalData } from '../../hooks/';
import './style.scss';

const HistoricalChart = () => {
  const { isLoading, stockData, activeStock } = useSelector(state => state.stockDataReducer);
  const historicalData = useHistoricalData();
  const [dimensions] = useDimensions();

  if (!historicalData) return null;

  const { quote } = stockData[activeStock];
  const trend = quote.change < 0 ? '#f72121' : '#19be87';

  return (
    <div className="historical-chart">
      {isLoading ? <Loader /> : null}
      <CompanyName />
      <GGPLOT data={historicalData} aes={['date', 'close']} dimensions={dimensions}>
        <Line fill={trend} />
      </GGPLOT>
    </div>
  );
};

export default HistoricalChart;
