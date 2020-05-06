import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  if (data[activeStock]) {
    const { chart } = data[activeStock];

    if (chart.length > 0) {
      return {
        data: chart,
        height: window.innerHeight * 0.6,
        width: window.innerWidth * 0.6,
        margin: { top: 5, right: 30, left: 20, bottom: 5 }
      };
    }
  }

  return null;
};

export default useHistoricalData;
