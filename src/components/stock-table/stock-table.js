import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const StockTable = () => {
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  if (!data[activeStock]) {
    return null;
  }

  const { quote } = data[activeStock];

  return (
    <table className="table-auto bg-white">
      <thead>
        <tr>
          <th className="px-4 py-2">Latest Time</th>
          <th className="px-4 py-2">Closing Price</th>
          <th className="px-4 py-2">Market Cap</th>
          <th className="px-4 py-2">52 High</th>
          <th className="px-4 py-2">52 Low</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">{quote.latestTime}</td>
          <td className="border px-4 py-2">{quote.close}</td>
          <td className="border px-4 py-2">{quote.marketCap}</td>
          <td className="border px-4 py-2">{quote.week52High}</td>
          <td className="border px-4 py-2">{quote.week52Low}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StockTable;
