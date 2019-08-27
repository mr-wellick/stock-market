import './app.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Footer } from './components/';
import { Sidebar } from './components/';
import { Dashboard } from './views/';
import { useDimensions } from './hooks/';

const App = () => {
  const [dimensions] = useDimensions();

  return (
    <Router>
      {dimensions.width <= window.innerWidth * 0.5 ? <Sidebar /> : null}
      <section className="main-content">
        <Route exact path="/" component={Dashboard} />
        <Route path="/" component={Footer} />
      </section>
    </Router>
  );
};

export default hot(App);
