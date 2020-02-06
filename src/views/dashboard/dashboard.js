import React from 'react';
import { Sidebar } from '../../components/';
import { Navigation } from '../../components/';
import { StockSypnosis } from '../../components/';
import { HistoricalChart } from '../../components/';
import { CompanyDescription } from '../../components/';
import { StockSelector } from '../../components/';
//import { News } from '../../components/';
//import { StockTable } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navigation />
      <div className="dashboard-content">
        <div className="dashboard-stock-list">
          <StockSelector />
        </div>
        <div className="dashboard-chart-info">
          <StockSypnosis />
          <HistoricalChart />
        </div>
      </div>
      <div className="dashboard-content info">
        <CompanyDescription />
        {/*
        <News />
        */}
      </div>
    </>
  );
};

export default Dashboard;
