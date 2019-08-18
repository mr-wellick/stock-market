import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const News = () => {
  const { data, activeStock } = useSelector(state => state.iexReducer);
  const { news } = data[activeStock];

  return news.map(article => (
    <div className="card" key={article.url}>
      <div className="card-content">
        <h3 className="card-title">
          <b>{article.headline}</b>
        </h3>
        <p className="card-summary">{article.summary}</p>
      </div>
      <div className="card-action article-link-container">
        <a className="article-link" href={article.url} target="_blank" rel="noopener noreferrer">
          {article.source}
        </a>
        <p className="article-date">{new Date(article.datetime).toLocaleString()}</p>
      </div>
    </div>
  ));
};

export default News;
