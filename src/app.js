import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Sidebar } from './components/';
import { Footer } from './components/';
import { Dashboard } from './views/';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <section className="main-content">
        <Route exact path="/" component={Dashboard} />
        <Route path="/" component={Footer} />
      </section>
    </Router>
  );
};

export default hot(App);
