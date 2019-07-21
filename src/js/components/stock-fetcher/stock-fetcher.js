import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchIEXData } from '../../redux/';
import { validate } from '../../_utilities/';
import './style.scss';

const StockFetcher = props => {
  const [stockName, setStockName] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    const validStockName = validate(stockName);

    if (validStockName) {
      props.fetchIEXData(stockName);
    } else {
      console.log('wooops');
    }

    document.querySelector('.stock-fetcher__input').value = '';
  };

  return (
    <form className="stock-fetcher__form" autoComplete="off" onSubmit={onSubmit}>
      <input
        onChange={event => setStockName(event.target.value)}
        className="stock-fetcher__input"
        type="text"
      />
    </form>
  );
};

export default connect(
  null,
  { fetchIEXData }
)(StockFetcher);
