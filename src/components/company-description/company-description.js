import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyDescription = () => {
  const { stockData, activeStock } = useSelector(state => state.stockDataReducer);

  if (!stockData[activeStock]) return null;

  const { companyName, description, tags } = stockData[activeStock].company;

  return (
    <div className="rounded overflow-hidden shadow-lg" style={{ background: 'white' }}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{companyName}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        {tags.map(tag => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CompanyDescription;
