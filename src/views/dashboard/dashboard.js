import React from 'react';
//import { lazy } from 'react';
//import { Suspense } from 'react';
import { NavBar } from '../../components/';
//import { StockSelector } from '../../components/';
//import { News } from '../../components/';
import './style.scss';

//const HistoricalChart = lazy(() => import('../../components/historical-chart/historical-chart.js'));

const Dashboard = () => {
  return (
    <>
      <div className="main-content__nav">
        <NavBar />
      </div>
      {/*
      <div className="main-content__data">
        <StockSelector />
        <Suspense fallback={'<div>Loading</div>'}>
          <HistoricalChart />
        </Suspense>
      </div>
      <div className="main-content__news">
        <h1>News</h1>
        <News />
      </div>
    */}
    </>
  );
};

export default Dashboard;
