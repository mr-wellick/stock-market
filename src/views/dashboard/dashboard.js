import React from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from '../../components/';
//import { StockSelector } from '../../components/';
//import { HistoricalChart } from '../../components/';
//import { CompanyName } from '../../components/';
import './style.scss';

const Dashboard = () => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <section className={`main-content ${className}`}>
      <NavBar />
    </section>
  );
};

export default Dashboard;
