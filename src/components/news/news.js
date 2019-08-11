import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const News = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);

  const news = data[activeStock].news;
  console.log(news);

  return (
    <div>
      {news.map(article => (
        <div key={article.url}>
          <div>
            <h3>
              <b>{article.headline}</b>
            </h3>
          </div>
          <div>
            <p>{article.summary.substring(0, 250)}...</p>
          </div>
          <div>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.source}
            </a>
            <span>{new Date(article.datetime).toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
