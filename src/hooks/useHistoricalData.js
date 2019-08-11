import { useSelector } from 'react-redux';

const useHistoricalData = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  if (Object.keys(data).length === 0 || !data[activeStock]) return null;

  if (data[activeStock]['Monthly Adjusted Time Series']) {
    const rawData = Object.entries(data[activeStock])[1][1];

    const formatted = Object.entries(rawData).map(items => ({
      date: new Date(items[0]),
      close: Number(items[1]['5. adjusted close'])
    }));

    return formatted;
  }

  return null;
};

export default useHistoricalData;
