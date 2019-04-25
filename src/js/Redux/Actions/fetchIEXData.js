import { IS_FETCHING } from "../Constants/";
import { FETCH_IEX_DATA } from "../Constants/";
import { FETCH_IEX_ERROR } from "../Constants/";

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
      dispatch({ type: FETCH_IEX_ERROR, error: "Incorrect stock name" });
    }

    // end request
    dispatch({ type: IS_FETCHING, isFetching: false });
  };
};

export default fetchIEXData;
