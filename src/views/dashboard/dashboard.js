import React from 'react';
import { StockSelector } from '../../components/';
import { HistoricalChart } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <section>
      <StockSelector />
      <HistoricalChart />
    </section>
  );
};

export default Dashboard;
