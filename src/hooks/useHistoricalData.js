import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  if (data[activeStock]) {
    const { chart } = data[activeStock];

    if (chart.length > 0) {
      return {
        data: chart,
        height: window.innerHeight * 0.6,
        width: window.innerWidth * 0.8,
        margin: { top: 0, right: 0, left: 0, bottom: 0 }
      };
    }
  }

  return null;
};

export default useHistoricalData;
