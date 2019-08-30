import React from 'react';
import { NavBar } from '../../components/';
import { StockSelector } from '../../components/';
import { HistoricalChart } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-nav">
        <NavBar />
      </div>
      <div className="dashboard-data">
        <StockSelector />
        <HistoricalChart />
      </div>
    </div>
  );
};

export default Dashboard;
