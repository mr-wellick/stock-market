import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import "./stockDescription.scss";

class StockDescription extends Component{
    static propTypes = {
        successData: PropTypes.object,
        robinhoodData: PropTypes.object
    }

    render(){
        if(!this.props.successData || !this.props.robinhoodData)
            return null;

        return(
            <div className="description-container">
                <h2 className="stock-founded">
                    {`${this.props.successData["stockName"]} founded in ${this.props.robinhoodData["year_founded"]}`}
                </h2>
                <div className="main-info-container">
                    <h4 className="stock-ceo">{ `CEO: ${this.props.robinhoodData["ceo"]}` }</h4>
                    <p className="stock-description">{ this.props.robinhoodData["description"] }</p>
                </div>
            </div>
        );
    }


}

export default StockDescription;
