import React from 'react';
import { Sidebar } from '../../components/';
import { Navigation } from '../../components/';
import { HistoricalChart } from '../../components/';
import { StockSypnosis } from '../../components/';
import { CompanyDescription } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navigation />
      <div className="dashboard-content">
        <StockSypnosis />
        <HistoricalChart />
        <CompanyDescription />
      </div>
    </>
  );
};

export default Dashboard;
