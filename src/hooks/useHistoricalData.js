import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { stockData, activeStock } = useSelector(state => state.stockDataReducer);

  if (stockData[activeStock] && stockData[activeStock]['Monthly Adjusted Time Series']) {
    const prices = stockData[activeStock]['Monthly Adjusted Time Series'];
    const formattedData = [];

    // don't know why eslint is complaining
    /* eslint-disable */
    for (const month in prices) {
      formattedData.push({
        date: new Date(month),
        close: Number(prices[month]['5. adjusted close'])
      });
    }

    return formattedData;
  }

  return null;
};

export default useHistoricalData;
