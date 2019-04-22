import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

function StockNews(props) {
  const { data, activeIndex } = props;

  if (data.length === 0) return null;

  return data[activeIndex].news.map((item, index) => (
    <div className="card news-container" key={index}>
      <div className="card-header">
        <p className="card-header-title news-date">
          <span>{item.source}</span>
          <span>{new Date(item.datetime).toLocaleString()}</span>
        </p>
      </div>
      <div className="card-content">
        <div className="content">
          <a rel="noopener noreferrer" target="_blank" href={item.url} className="news-link">
            <span className="news-description">{item.headline}</span>
            <span className="news-summary">{item.summary}</span>
          </a>
        </div>
      </div>
    </div>
  ));
}

StockNews.propTypes = {
  data: PropTypes.array,
  activeIndex: PropTypes.number
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(
  mapStateToProps,
  null
)(StockNews);
