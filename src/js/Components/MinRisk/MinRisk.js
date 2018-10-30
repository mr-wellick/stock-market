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
                <h1>hello</h1>
        );
    }

    componentDidMount(){
        if(this.props.successData)
            console.log(this.props.successData);
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(MinRisk);