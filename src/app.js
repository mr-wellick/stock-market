import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Sidebar } from './components/';
import { Dashboard } from './views/';
import { Financials } from './views/';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Route exact path="/" component={Dashboard} />
      <Route path="/financials/" component={Financials} />
    </Router>
  );
};

export default hot(App);
