import React from 'react';
import { GGPLOT } from 'react-d3-ggplot';
import { Line } from 'react-d3-ggplot';
import { useSelector } from 'react-redux';
import { CompanyName } from '../company-name/';
import { Loader } from '../loader/';
import { ChartPlaceholder } from '../chart-placeholder/';
import { useDimensions } from '../../hooks/';
import { useHistoricalData } from '../../hooks/';
import './style.scss';

const HistoricalChart = () => {
  const { isLoading } = useSelector(state => state.stockDataReducer);
  const historicalData = useHistoricalData();
  const [dimensions] = useDimensions();

  if (historicalData['Note'])
    return (
      <div className="historical-chart">
        <ChartPlaceholder message={historicalData['Note']} />
      </div>
    );

  return (
    <div className="historical-chart">
      {isLoading ? <Loader /> : null}
      <CompanyName />
      <GGPLOT data={historicalData} aes={['date', 'close']} dimensions={dimensions}>
        <Line />
      </GGPLOT>
    </div>
  );
};

export default HistoricalChart;
