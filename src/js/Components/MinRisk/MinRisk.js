import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import { connect }   from "react-redux";

class MinRisk extends Component{
    static propTypes = {
        successData: PropTypes.array
    }

    render(){
        return(
            <h1>Here we&apos;ll have the risk-return space plotted.</h1>
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(MinRisk);