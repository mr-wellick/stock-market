import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
//import { Modal } from './components/';
import { Dashboard } from './views/';

const App = () => {
  return (
    <>
      {/* <Modal /> */}
      <Router>
        <Route exact path="/" component={Dashboard} />
      </Router>
    </>
  );
};

export default hot(App);
