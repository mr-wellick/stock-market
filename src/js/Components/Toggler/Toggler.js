import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./toggler.scss";

class Toggler extends Component{
    static propTypes = {
        children: PropTypes.func,
        successData: PropTypes.array
    }

    state = {
        activeData: {}
    }

    onChange = (event) => {
        // use props to select a single data set
        let activeIndex = event.target.value;
        this.setState({
            activeData: this.props.successData[activeIndex]
        });
    }

    render(){
        return(
            this.props.children(this.props.successData, this.onChange, this.state.activeData)
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(Toggler);
