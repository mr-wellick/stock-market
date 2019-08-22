import React from 'react';
import { NavBar } from '../../components/';
import { StockSelector } from '../../components/';
import { HistoricalChart } from '../../components/';
import { News } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <div className="main-content__nav">
        <NavBar />
      </div>
      <div className="main-content__data">
        <StockSelector />
        <HistoricalChart />
      </div>
      <div className="main-content__news">
        <h1>News</h1>
        <News />
      </div>
    </>
  );
};

export default Dashboard;
