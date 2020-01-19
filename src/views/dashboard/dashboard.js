import React from 'react';
import { Sidebar, StockFetcher } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="dashboard-content-container">
        <StockFetcher />
      </div>
    </div>
  );
};

export default Dashboard;
