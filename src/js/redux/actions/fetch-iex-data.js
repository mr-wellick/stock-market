import { FETCH_IEX_DATA } from '../constants/';
import { FETCH_ERROR } from '../constants/';

const fetchIEXData = function(stockName) {
  return async dispatch => {
    const response = await fetch(
      `https://cloud.iexapis.com/stable/stock/${stockName}/batch?types=income,stats,company,news,quote,chart&range=3m&token=${process.env.IEX_KEY}`
    );

    try {
      const data = await response.json();
      dispatch({ type: FETCH_IEX_DATA, data });
    } catch (err) {
      dispatch({ type: FETCH_ERROR, error: err });
    }
  };
};

export default fetchIEXData;
