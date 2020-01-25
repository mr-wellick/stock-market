import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  if (data[activeStock]) {
    const { chart } = data[activeStock];

    if (chart.length > 0) {
      const formattedData = chart.map(day => ({
        ...day,
        date: new Date(day.date)
      }));

      return {
        data: formattedData,
        aes: ['date', 'close'],
        dimensions: {
          height: window.innerHeight * 0.6,
          width: window.innerWidth * 0.65,
          padding: 50
        }
      };
    }
  }

  return null;
};

export default useHistoricalData;
