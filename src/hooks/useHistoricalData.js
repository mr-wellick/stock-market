import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { stockData, activeStock } = useSelector(state => state.stockDataReducer);

  if (stockData[activeStock]) {
    const { chart } = stockData[activeStock];

    if (chart.length > 0) {
      const formattedData = chart.map(day => ({
        ...day,
        date: new Date(day.date)
      }));

      return formattedData;
    }
  }

  return null;
};

export default useHistoricalData;
