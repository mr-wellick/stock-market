import './app.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Sidebar } from './components/';
import { Dashboard } from './views/';
import { Financials } from './views/';

const App = () => {
  const { className } = useSelector(state => state.uiReducer);

  return (
    <Router>
      <Sidebar />
      <section className={`main-content ${className}`}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/financials/" component={Financials} />
      </section>
    </Router>
  );
};

export default hot(App);
