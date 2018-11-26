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

        let { company, relevant }  = this.props.stockData;

        return(
            <section className="company-description">
                <div className="company-summary">
                    <div>
                        <h2>Summary</h2>
                        <p>{ company["description"] }</p>
                    </div>
                </div>
                <hr />
                <div className="company-details">
                    <div>
                        <h3>CEO</h3>
                        <p>{ company["CEO"] }</p>
                    </div>
                    <div>
                        <h3>Website</h3>
                        <a href={ company["website"] }>{ company["website"] }</a>
                    </div>
                    <div>
                        <h3>Industry</h3>
                        <p>{ company["industry"] }</p>
                    </div>
                    <div>
                        <h3>Sector</h3>
                        <p>{ company["sector"] }</p>
                    </div>
                </div>
            </section>
        );
    }


}

export default StockDescription;
