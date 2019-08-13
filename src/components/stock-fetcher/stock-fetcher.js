import React from 'react';
import { useRef } from 'react';
import { SearchIcon } from '../../icons/';
import { useFetcher } from '../../hooks/';
import './style.scss';

const StockFetcher = () => {
  const inputNode = useRef();
  const [setStockName, onSubmit] = useFetcher(inputNode);

  return (
    <form className="stock-fetcher__form" autoComplete="off" onSubmit={onSubmit}>
      <SearchIcon />
      <input
        ref={inputNode}
        onChange={event => setStockName(event.target.value)}
        className="stock-fetcher__input"
        type="text"
        placeholder="Search Symbols"
        required
        disabled
      />
    </form>
  );
};

export default StockFetcher;
