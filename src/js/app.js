import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { NavBar } from './components/';
import { Sidebar } from './components/';
import { MainContent } from './components/';

const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <MainContent>test</MainContent>
    </>
  );
};

export default hot(App);
