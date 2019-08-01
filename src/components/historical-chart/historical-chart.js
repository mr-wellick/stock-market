import React from 'react';
import { GGPLOT } from 'react-d3-ggplot';
import { Line } from 'react-d3-ggplot';
import { useSelector } from 'react-redux';
import { useDimensions } from '../../hooks/';

const HistoricalChart = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);
  const dimensions = useDimensions();

  if (Object.keys(data).length === 0) return null;

  const formatted = data[activeStock].chart.map(item => ({
    ...item,
    date: new Date(item.date)
  }));

  return (
    <GGPLOT data={formatted} aes={['date', 'close']} dimensions={dimensions}>
      <Line />
    </GGPLOT>
  );
};

export default HistoricalChart;
