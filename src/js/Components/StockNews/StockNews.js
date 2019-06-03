import React from "react";
import { connect } from "react-redux";
import "./style.scss";

const StockNews = props => {
  const { data, activeIndex } = props;

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="news-container row">
      <h3 style={{ paddingLeft: "10px" }}>News</h3>
      {data[activeIndex].news.map(article => (
        <div key={article.url} className="col s12">
          <div className="card horizontal hoverable">
            <div className="image-container card-image">
              <div
                className="grey lighten-1"
                style={{
                  width: "300px",
                  height: "100%"
                }}
              >
                {/*
                <img className="responsive-image" src={article.image} alt="not-available" />
              */}
              </div>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h6 id="article-headline">
                  <b>{article.headline}</b>
                </h6>
                <p className="article-summary">{article.summary.substring(0, 250)}...</p>
              </div>
              <div className="card-action link-to-article">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.source}
                </a>
                <span>{new Date(article.datetime).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  const { data, activeIndex } = state.iexDataReducer;

  return {
    data,
    activeIndex
  };
};

export default connect(
  mapStateToProps,
  null
)(StockNews);
