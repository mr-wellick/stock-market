import React from 'react';
import { useSelector } from 'react-redux';
//import { StockSelector } from '../../components/';
//import { HistoricalChart } from '../../components/';
import { CompanyName } from '../../components/';
import './style.scss';

const Dashboard = () => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <section className={`main-content__container ${className}`}>
      <div className="main-content__summary">
        <CompanyName />
      </div>
      <div className="main-content__data">
        <h1>under development</h1>
        {/*
          <div className="dashboard-selector">
            <StockSelector />
          </div>
          <div>
            <HistoricalChart />
          </div>
        */}
      </div>
    </section>
  );
};

export default Dashboard;
