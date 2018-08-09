import React, { Component }  from "react";
import PropTypes             from "prop-types";
import { findFrequencies }   from "./Utilities";
import { findPercentChange } from "./Utilities";
import "./histogram.scss";

class Histogram extends Component {

    componentDidUpdate(){
        let { stockData } = this.props.data;

        // Get dates and closing prices
        let dates         = stockData.map( item =>  new Date(item[0]) );
        let adjustedClose = stockData.map( item => Number(item[1]["5. adjusted close"]) );

        // Get percent change of prices
        let percentChange = findPercentChange(adjustedClose);
        console.log(percentChange);
    }

    render(){
        return(
            <svg
                ref={ node => this.node = node }
                width={ this.props.width }
                height={ this.props.height }
            />
        );
    }
}

Histogram.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.object
};

export default Histogram;
