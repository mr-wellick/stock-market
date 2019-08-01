import React from 'react';
import { StockSelector } from '../../components/';
import { HistoricalChart } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <section className="dashboard-container">
      <div className="dashboard-selector">
        <StockSelector />
      </div>
      <div>
        <HistoricalChart />
      </div>
    </section>
  );
};

export default Dashboard;
