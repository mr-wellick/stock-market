import React from 'react';
import { Sidebar } from '../../components/';
import { StockFetcher } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <StockFetcher />
      </div>
    </div>
  );
};

export default Dashboard;
