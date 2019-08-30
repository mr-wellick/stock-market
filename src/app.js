import './app.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Footer } from './components/';
import { Sidebar } from './components/';
import { Modal } from './components/';
import { Loader } from './components/';
import { Dashboard } from './views/';

const App = () => {
  const { stockData, isLoading } = useSelector(state => state.stockDataReducer);

  return (
    <>
      <Modal />
      <Router>
        <Sidebar />
        <section className="content-container">
          {Object.keys(stockData).length === 0 && isLoading ? <Loader /> : null}
          <Route exact path="/" component={Dashboard} />
          <Route path="/" component={Footer} />
        </section>
      </Router>
    </>
  );
};

export default hot(App);
