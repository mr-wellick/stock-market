import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchIEXData } from '../../redux/';
import { validate } from '../../_utilities/';
import './style.scss';

const StockFetcher = props => {
  const [state, setState] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    const validStockName = validate(state);

    if (validStockName) {
      props.fetchIEXData(state);
    } else {
      console.log('wooops');
    }

    document.querySelector('.stock-fetcher__input').value = '';
  };

  return (
    <form className="stock-fetcher__form" autoComplete="off" onSubmit={onSubmit}>
      <input
        onChange={event => setState(event.target.value)}
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
