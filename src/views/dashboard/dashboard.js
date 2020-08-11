import React from 'react';
import { Sidebar } from '../../components/';
import { StockFetcher } from '../../components';
import { HistoricalChart } from '../../components';
import { StockSelector } from '../../components';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard-container px-40">
        <StockFetcher />
        <HistoricalChart />
        <StockSelector />
      </div>
    </>
  );
};

export default Dashboard;
