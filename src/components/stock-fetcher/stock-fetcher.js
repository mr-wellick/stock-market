import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';
import { SearchIcon } from '../../icons/';
import { useFetcher } from '../../hooks/';
import { userInput } from '../../redux/';
import './style.scss';

const StockFetcher = () => {
  // inputNode will be used to select <input /> so we can clear user input after submission.
  const inputNode = useRef();
  const fetchData = useFetcher(inputNode);
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch({ type: 'FETCH_REQUESTED', validStockName: 'TSLA' });
  }, []);

  return (
    <form className="stock-fetcher__form" autoComplete="off" onSubmit={fetchData}>
      <SearchIcon />
      <input
        ref={inputNode}
        onChange={event => {
          dispatch(userInput(event.target.value));
          dispatch({ type: 'SYMBOLS_REQUESTED', input: event.target.value });
        }}
        className="stock-fetcher__input"
        type="text"
        placeholder="Search Symbols"
        required
      />
    </form>
  );
};

export default StockFetcher;
