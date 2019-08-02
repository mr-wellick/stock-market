import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  if (Object.keys(data).length === 0) return null;

  const formatted = data[activeStock].chart.map(item => ({
    ...item,
    date: new Date(item.date)
  }));

  return formatted;
};

export default useHistoricalData;
