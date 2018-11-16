import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import "./stockDescription.scss";

class StockDescription extends Component{
    static propTypes = {
        stockData: PropTypes.object,
    }

    render(){
        if(!this.props.stockData)
            return null;

        let { company } = this.props.stockData;

        return(
            <div className="description-container">
                <div className="stock-name">
                    <a 
                        href={ company["website"] }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {`${company["companyName"]}`} 
                    </a>
                </div>
                <div className="main-info-container">
                    <h4 className="stock-ceo">{ `CEO: ${company["CEO"]}` }</h4>
                    <h4 className="stock-sector">{ `Sector: ${company["sector"] }` }</h4>
                    <h4 className="stock-industry">{ `Industry: ${company["industry"]}` }</h4>
                    <p className="stock-description">{ company["description"] }</p>
                </div>
            </div>
        );
    }


}

export default StockDescription;