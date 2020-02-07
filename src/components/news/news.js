import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const News = () => {
  const { data, activeStock } = useSelector(state => state.stockDataReducer);

  // no data
  if (Object.keys(data).length <= 0) {
    return null;
  }

  const { news } = data[activeStock];

  // no available news for activeStock
  if (news.length <= 0) {
    return null;
  }

  return (
    <div className="news-container">
      <h2 className="font-bold text-xl mb-2 news-title">News</h2>
      {news.map(article => {
        return (
          <div className="md:flex bg-white stock-news" key={article.url}>
            <div className="md:flex-shrink-0">
              <img className="md:w-56" src={article.image} alt="Article background" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
                {article.headline}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={article.url}
                className="mt-2 text-gray-600 hover:underline"
              >
                {article.summary.substring(0, 150)}....
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
