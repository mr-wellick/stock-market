//import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { validate } from '../utilities/';

const useFetcher = node => {
  const { data } = useSelector(state => state.iexReducer);
  const { input } = useSelector(state => state.uiReducer);
  //const dispatch = useDispatch();

  const fetchStock = event => {
    event.preventDefault();
    const validStockName = validate(input);

    if (validStockName && !data[validStockName]) {
      //dispatch({ type: 'FETCH_REQUESTED', validStockName });
      console.log(`valid stock ticker: ${validStockName}`);
    } else {
      console.log('woooops');
    }

    node.current.value = '';
  };

  return fetchStock;
};

export default useFetcher;
