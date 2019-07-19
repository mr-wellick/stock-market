import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { NavBar } from './components/';
import { Sidebar } from './components/';

const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
    </>
  );
};

export default hot(App);
