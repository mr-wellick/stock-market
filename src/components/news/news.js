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
    <div className="px-4 pt-10">
      <h2 className="font-bold text-4xl pb-4 news-title">News</h2>
      {news.map(article => {
        return (
          <div key={article.url} className="max-w-sm w-full lg:max-w-full lg:flex pb-10">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${article.image})` }}
              title="Woman holding a mug"
            ></div>
            <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{article.headline}</div>
                <p className="text-gray-700 text-base">{article.summary}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <a
                    href={article.url}
                    className="text-gray-900 leading-none cursor hover:underline"
                  >
                    {article.source}
                  </a>
                  <p className="text-gray-600">{new Date(1000 * article.datetime).toString()}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
