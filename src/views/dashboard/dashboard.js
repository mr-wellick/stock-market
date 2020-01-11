import React from 'react';
import { NavBar } from '../../components/';
import { StockSelector } from '../../components/';
import { HistoricalChart } from '../../components/';
import { Sidebar } from '../../components/';
import { Footer } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="content-container">
        <div className="dashboard-nav">
          <NavBar />
        </div>
        <div className="dashboard-content">
          <StockSelector />
          <HistoricalChart />
        </div>
        <div className="dashboard-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
