import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Footer } from './components/';
import { Sidebar } from './components/';
import { Modal } from './components/';
import { Dashboard } from './views/';

const App = () => {
  return (
    <>
      <Modal />
      <Router>
        <Sidebar />
        <section className="content-container">
          <Route exact path="/" component={Dashboard} />
          <Route path="/" component={Footer} />
        </section>
      </Router>
    </>
  );
};

export default hot(App);
