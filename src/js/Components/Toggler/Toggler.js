import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./toggler.scss";

class Toggler extends Component{
    static propTypes = {
        children: PropTypes.func,
        successData: PropTypes.array,
        robinhoodData: PropTypes.array,
        stockNews: PropTypes.array
    }

    state = {
        activeIndex: 0
    }

    onChange = (event) => {
        // use props to select a single data set
        this.setState({
            activeIndex: event.target.value
        });
    }

    propCollection(){
        return {
            successData: this.props.successData,
            robinhoodData: this.props.robinhoodData,
            stockNews: this.props.stockNews,
            onChange: this.onChange,
            activeIndex: this.state.activeIndex
        };
    }

    render(){
        return(
            this.props.children(this.propCollection())
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, null)(Toggler);
