import React from 'react';
import { StockFetcher } from '../stock-fetcher/';
import './style.scss';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <StockFetcher className={'main-nav-search'} />
    </nav>
  );
};

export default Navigation;
