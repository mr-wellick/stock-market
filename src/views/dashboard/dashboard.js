import React from 'react';
import { Sidebar } from '../../components/';
import { Navigation } from '../../components/';
import { HistoricalChart } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navigation />
      <div className="dashboard-content">
        <HistoricalChart />
      </div>
    </>
  );
};

export default Dashboard;
