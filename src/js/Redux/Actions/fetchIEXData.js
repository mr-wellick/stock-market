import { IS_FETCHING } from "../Constants/";
import { FETCH_IEX_DATA } from "../Constants/";

const fetchIEXData = function(stockName) {
  return async dispatch => {
    // begin request
    dispatch({ type: IS_FETCHING, isFetching: true });

    const response = await fetch(
      `https://api.iextrading.com/1.0/stock/${stockName}/batch?types=relevant,stats,company,financials,news,quote,chart&range=5y`
    );

    try {
      const data = await response.json();
      dispatch({ type: FETCH_IEX_DATA, data });
    } catch (err) {
      console.error(err);
      alert("Entered incorrect stock");
    }

    // end request
    dispatch({ type: IS_FETCHING, isFetching: false });
  };
};

export default fetchIEXData;
