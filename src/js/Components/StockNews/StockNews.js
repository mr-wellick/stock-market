import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

function StockNews(props) {
  const { data, activeIndex } = props;

  if (data.length === 0) return null;

  return (
    <section>
      <h3>News</h3>
      {data[activeIndex].news.map(stock => (
        <div key={stock.url} className="row">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  {`${stock.source} -- ${new Date(stock.datetime).toLocaleString()}`}
                </span>
                <span className="card-title">{stock.headline}</span>
                <p>{stock.summary}</p>
              </div>
              <div className="card-action">
                <a rel="noopener noreferrer" target="_blank" href={stock.url}>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
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
