import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const CompanyDescription = () => {
  const { data, activeStock } = useSelector((state) => state.stockDataReducer);

  if (!data[activeStock]) return null;

  const { companyName, description, tags } = data[activeStock].company;

  return (
    <div className="company-container">
      <h2 className="font-bold text-xl mb-2">Company Description</h2>
      <div className="px-1 pb-1 overflow-hidden company-info-card bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{companyName}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
