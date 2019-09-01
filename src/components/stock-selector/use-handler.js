import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteStock } from '../../redux/';
import { toggleModal } from '../../redux/';
import { setActiveStock } from '../../redux/';

const useHandler = () => {
  const dispatch = useDispatch();
  const { stockData } = useSelector(state => state.stockDataReducer);

  return e => {
    e.preventDefault();
    const { symbol } = e.target.dataset;
    // here we want to delete symbol from our current stock list in stockData.
    // this line helps us keep our UI in sync.
    const stockNames = Object.keys(stockData).filter(stockName => stockName !== symbol);

    // if we have one stock, we won't be allowed to delete it.
    if (stockNames.length > 0) {
      dispatch(deleteStock(symbol));
      dispatch(setActiveStock(stockNames[0]));
    } else {
      dispatch(
        toggleModal({
          error: `Looks like you are attempting to delete all of your stocks in your current list.
          If you wish to delete ${symbol}, please add another stock and then delete the stock you no longer want.`
        })
      );
    }
  };
};

export default useHandler;
