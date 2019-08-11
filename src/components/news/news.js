import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const News = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);
  const { news } = data[activeStock];

  return news.map(article => (
    <div className="news-container" key={article.url}>
      <div className="news-headline">
        <h3>
          <b>{article.headline}</b>
        </h3>
      </div>
      <div className="news-summary">
        <p>{article.summary}</p>
      </div>
      <div className="news-source">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.source}
        </a>
        <span>{new Date(article.datetime).toLocaleString()}</span>
      </div>
    </div>
  ));
};

export default News;
