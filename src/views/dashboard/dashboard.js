import React from 'react';
import { Sidebar } from '../../components/';
import { StockFetcher } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="w-5/6 ml-auto">
        <StockFetcher />
      </div>
    </>
  );
};

export default Dashboard;
