import React from 'react';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import { useHistoricalData } from '../../hooks/';
import { DownloadIcon } from '../../icons/';
import './style.scss';

const DownloadCSV = () => {
  const { activeStock } = useSelector(state => state.stockDataReducer);
  const data = useHistoricalData().map(day => ({ ...day, date: day.date.toDateString() }));
  const headers = [
    { label: 'Date', key: 'date' },
    { label: 'Close', key: 'close' }
  ];

  if (!data || data['Note']) return null;

  return (
    <div className="container">
      <CSVLink data={data} headers={headers} filename={`${activeStock}.csv`}>
        <div className="download-icon">
          <DownloadIcon />
          <p>CSV</p>
        </div>
      </CSVLink>
    </div>
  );
};

export default DownloadCSV;
