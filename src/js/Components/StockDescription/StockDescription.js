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
            <div>
                <div>
                    <a
                        href={ company["website"] }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {`${company["companyName"]}`}
                    </a>
                </div>
                <div>
                    <h4>{ `CEO: ${company["CEO"]}` }</h4>
                    <h4>{ `Sector: ${company["sector"] }` }</h4>
                    <h4>{ `Industry: ${company["industry"]}` }</h4>
                    <p>{ company["description"] }</p>
                </div>
            </div>
        );
    }


}

export default StockDescription;
