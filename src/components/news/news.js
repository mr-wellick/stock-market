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
          <div
            key={article.url}
            className="px-1 pb-1 overflow-hidden shadow-lg bg-white stock-news"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.headline}</div>
              <a href={article.url} className="text-gray-700 text-base hover:underline">
                {article.summary}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
