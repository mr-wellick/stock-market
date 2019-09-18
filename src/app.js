import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Modal } from './components/';
import { Dashboard } from './views/';
import { Login } from './views/';
import { Register } from './views/';

const App = () => {
  return (
    <>
      <Modal />
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    </>
  );
};

export default hot(App);
