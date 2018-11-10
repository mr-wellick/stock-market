import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";

class StockDescription extends Component{
    static propTypes = {
        successData: PropTypes.object
    }

    state = {
        stockName: "",
        robinHoodData: {}
    }

    render(){
        if(!this.props.successData)
            return null;

        return(
            <div>
                <h2>
                    { this.props.successData["data"]["stockName"] }
                </h2>
            </div>
        );
    }


}

export default StockDescription;