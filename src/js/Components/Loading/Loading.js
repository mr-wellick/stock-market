import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./loading.scss";

class Loading extends Component{
    render(){
        let { requestingData } = this.props;

        if(!requestingData)
            return null;

        return(
            <section className="section-data__container">
                <div className="loading-icon">
                    <div className="loading-icon__box"></div>
                    <div className="loading-icon__box"></div>
                    <div className="loading-icon__box"></div>
                    <div className="loading-icon__box"></div>
                </div>
            </section>
        );
    }
}

Loading.propTypes = {
    requestingData: PropTypes.bool
};

let mapState = (state) => {
    return {
        ...state.isFetchingData
    };
};

export default connect(mapState, null)(Loading);
