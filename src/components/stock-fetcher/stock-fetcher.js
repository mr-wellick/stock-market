import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { SearchIcon } from '../../icons/';
import { querying } from '../../redux/';
import { startFetch } from '../../redux/';
import { toggleModal } from '../../redux/';
import { validate } from '../../utilities/';
import './style.scss';

const useHandler = () => {
  const { queryTerm, data } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();

  return e => {
    e.preventDefault();

    const isValidQueryTerm = validate(queryTerm);

    if (isValidQueryTerm) {
      // note: a valid query term doesn't neccessarily mean it is a valid stock name
      if (!data[isValidQueryTerm]) {
        dispatch(startFetch(isValidQueryTerm));
      } else {
        dispatch(
          toggleModal({ message: `${isValidQueryTerm} is already in your list. Please try again.` })
        );
      }
    } else {
      dispatch(toggleModal({ message: 'Please check your input and try again.' }));
    }

    const input = document.querySelector('.stock-input');
    input.value = '';
  };
};

const StockFetcher = () => {
  const { data } = useSelector(state => state.stockDataReducer);
  const dispatch = useDispatch();
  const handler = useHandler();

  useEffect(() => {
    const stocks = Object.keys(data);

    if (stocks.length <= 0) {
      dispatch(startFetch('tsla'));
    }
  }, [data, dispatch]);

  return (
    <div className="p-4">
      <form className="w-full max-w-sm" autoComplete="off" onSubmit={handler}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="stock-input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-7 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Symbols"
            required
            onChange={e => dispatch(querying(e.target.value))}
          />
        </div>
      </form>
    </div>
  );
};

export default StockFetcher;
