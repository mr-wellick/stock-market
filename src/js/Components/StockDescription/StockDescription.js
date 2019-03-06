import React       from "react";
import PropTypes   from "prop-types";
import { connect } from "react-redux";
import "./style.scss";

function StockDescription(props){
    const { data, activeIndex } = props;

    if(data.length === 0)
        return null;

    return(
        <div className="card">
            <div className="card-header">
                <p className="card-header-title company-info">
                    <span className="company-name">
                        { data[activeIndex].company.companyName }
                    </span>
                    <span className="company-ceo">
                        CEO: { data[activeIndex].company.CEO ? data[activeIndex].company.CEO : "No CEO" }
                    </span>
                </p>
            </div>
            <div className="card-content">
                <p className="content">
                    { data[activeIndex].company.description }
                </p>
            </div>
        </div>
    );
}

StockDescription.propTypes = {
    data: PropTypes.array,
    activeIndex: PropTypes.number
};

const mapStateToProps = state => ({ ...state.iexDataReducer });

export default connect(mapStateToProps, null)(StockDescription);
