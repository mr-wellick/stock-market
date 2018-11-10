import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";

class StockDescription extends Component{
    static propTypes = {
        successData: PropTypes.object,
        robinhoodData: PropTypes.object
    }

    render(){
        if(!this.props.successData || !this.props.robinhoodData)
            return null;

        return(
            <div>
                <h2>
                    { `${this.props.successData["data"]["stockName"]} founded in ${this.props.robinhoodData["year_founded"]}` }
                </h2>
                <h5>{ this.props.robinhoodData["ceo"] }</h5>
                <p>{ this.props.robinhoodData["description"] }</p>
            </div>
        );
    }


}

export default StockDescription;