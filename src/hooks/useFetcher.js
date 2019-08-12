import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { validate } from '../utilities/';

const useFetcher = node => {
  const [stockName, setStockName] = useState('');
  const { data } = useSelector(state => state.iexReducer);
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const validStockName = validate(stockName);

    if (validStockName && !data[validStockName]) {
      dispatch({ type: 'FETCH_REQUESTED', validStockName });
    } else {
      alert('There was an error processing your request. Please try again.');
    }

    node.current.value = '';
  };

  return [setStockName, onSubmit];
};

export default useFetcher;
