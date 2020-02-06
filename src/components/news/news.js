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
      {news.map(article => (
        <div key={article.url} className="max-w-sm w-full lg:max-w-full lg:flex stock-news">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${article.image})` }}
            title="Woman holding a mug"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">{article.headline}</div>
              <p className="text-gray-700 text-base">{article.summary.substring(0, 150)} ...</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article.url}
                  className="text-gray-900 leading-none news-link"
                >
                  {article.source}
                </a>
                <p className="text-gray-600">{null}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
