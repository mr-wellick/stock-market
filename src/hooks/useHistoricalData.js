import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  if (Object.keys(data).length === 0 || !data[activeStock]) return null;

  if (data[activeStock].chart) {
    const formatted = data[activeStock].chart.map(historical => ({
      ...historical,
      date: new Date(historical['date'])
    }));

    return formatted;
  }

  return null;
};

export default useHistoricalData;
