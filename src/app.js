import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
//import { Router } from '@reach/router';
import { NavBar } from './components/';
import { Sidebar } from './components/';
////import { Dashboard } from './views/';
//import { Financials } from './views/';

const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      {/*
      <Router>
        <Dashboard path="/" />
        <Financials path="/financials" />
      </Router>
      */}
    </>
  );
};

export default hot(App);
