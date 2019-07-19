import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Sidebar } from './components/';

const App = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};

export default hot(App);
