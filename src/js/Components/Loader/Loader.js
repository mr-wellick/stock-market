import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./loader.scss";

class Loader extends Component{
    static propTypes = {
        isFetching: PropTypes.bool
    }

    render(){
        //if(this.props.isFetching === false)
        //    return null;

        return(
            <div className="loader">
                <div className="loader__block1"></div>
                <div className="loader__block2"></div>
                <div className="loader__block3"></div>
                <div className="loader__block4"></div>
            </div>
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(Loader);
