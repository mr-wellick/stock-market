import React from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from '../../components/';
import { StockSelector } from '../../components/';
import './style.scss';

const HistoricalChart = lazy(() => import('../../components/historical-chart/historical-chart.js'));

const Dashboard = () => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <section className={`main-content ${className}`}>
      <div className="main-content__nav">
        <NavBar />
      </div>
      <div className="main-content__data">
        <StockSelector />
        <Suspense fallback={'<div>Loading</div>'}>
          <HistoricalChart />
        </Suspense>
      </div>
    </section>
  );
};

export default Dashboard;
