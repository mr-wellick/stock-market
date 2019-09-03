import React from 'react';
import { NavBar } from '../../components/';
import { StockSelector } from '../../components/';
import { HistoricalChart } from '../../components/';
import { Sidebar } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard-container">
        <div className="dashboard-nav">
          <NavBar />
        </div>
        <div className="dashboard-content">
          <StockSelector />
          <HistoricalChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
