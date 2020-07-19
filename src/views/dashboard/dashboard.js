import React from 'react';
import { Sidebar } from '../../components/';
import { StockFetcher } from '../../components';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard-container px-40">
        <StockFetcher />
      </div>
    </>
  );
};

export default Dashboard;
