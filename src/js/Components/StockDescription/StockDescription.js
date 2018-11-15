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

        let { successData, robinhoodData } = this.props;

        return(
            <div className="description-container">
                <h2 className="stock-founded">
                    {`${successData["stockName"]} founded in ${robinhoodData["year_founded"]}`}
                </h2>
                <div className="main-info-container">
                    <h4 className="stock-ceo">{ `CEO: ${robinhoodData["ceo"]}` }</h4>
                    <h4 className="stock-sector">{ `Sector: ${robinhoodData["sector"] }` }</h4>
                    <h4 className="stock-industry">{ `Industry: ${robinhoodData["industry"]}` }</h4>
                    <p className="stock-description">{ robinhoodData["description"] }</p>
                </div>
            </div>
        );
    }


}

export default StockDescription;
