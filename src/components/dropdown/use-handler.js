import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../../redux/';
import { stockTickersSuccess } from '../../redux/';
import { toggleModal } from '../../redux/';

const useHandler = () => {
  const dispatch = useDispatch();
  const { stockData } = useSelector(state => state.stockDataReducer);

  return e => {
    const { symbol } = e.target.dataset;

    if (!stockData[symbol]) {
      dispatch(fetchStockData(symbol));
    } else {
      dispatch(
        toggleModal({
          error: `Looks like you either entered an incorrect stock ticker or the stock ticker
          you are attempting to retrieve is already in your list. Please double check your input and
          try again.`
        })
      );
    }

    // clear previous results and clear input field
    dispatch(stockTickersSuccess({}));
    document.querySelector('.stock-input').value = '';
  };
};

export default useHandler;
