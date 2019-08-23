import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { validate } from '../utilities/';
import { fetchError } from '../redux/';

const useFetcher = node => {
  const { data } = useSelector(state => state.iexReducer);
  const { input } = useSelector(state => state.uiReducer);
  const dispatch = useDispatch();

  const fetchStock = event => {
    event.preventDefault();
    const validStockName = validate(input);
    dispatch({ type: 'BEST_MATCHES', payload: {} });

    if (validStockName && !data[validStockName]) {
      dispatch({ type: 'FETCH_REQUESTED', validStockName });
    } else {
      dispatch(
        fetchError('You either entered a stock already in your list or an incorrect input.')
      );
    }

    node.current.value = '';
  };

  return fetchStock;
};

export default useFetcher;
