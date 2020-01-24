import React from 'react';
import { Sidebar } from '../../components/';
import { Navigation } from '../../components/';
import './style.scss';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navigation />
    </>
  );
};

export default Dashboard;
