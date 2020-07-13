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
      <form
        className="flex items-center border rounded w-2/5"
        autoComplete="off"
        onSubmit={handler}
      >
        <input
          className="stock-input bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-30 w-full p-2"
          type="text"
          placeholder="Search Symbols"
          required
          onChange={e => dispatch(querying(e.target.value))}
        />
      </form>
    </div>
  );
};

export default StockFetcher;
