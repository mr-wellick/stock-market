import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Modal } from './components/';
import { Dashboard } from './views/';
import './App.css';

const App = () => {
  return (
    <>
      <Modal />
      <Router>
        <Route exact path="/" component={Dashboard} />
      </Router>
    </>
  );
};

export default App;
