import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./stockSelector.scss";

class StockSelector extends Component{
    static propTypes = {
        stockData: PropTypes.array,
        onChange: PropTypes.func
    }

    render(){
        let { stockData } = this.props;
        if(stockData.length === 0)
            return null;

        return(
            <form onChange={ this.props.onChange } className="form-active">
                <div className="form-active__container">
                    <div className="form-active__stock">
                        <input
                            type="radio"
                            id={ stockData[0]["company"]["symbol"] }
                            name="active-stock"
                            value={ 0 }
                            defaultChecked
                        />
                        <label htmlFor={ stockData[0]["company"]["symbol"] }>
                            { stockData[0]["company"]["symbol"] }
                        </label>
                        <div>{ "$"+stockData[0]["quote"]["close"] }</div>
                    </div>
                    {
                        // If we only have one stock, no need to run this code.
                        stockData.length > 1 ?
                            // Remove first entry and bump indices + 1
                            stockData.slice(1).map( (item, index) =>
                                <div key={ index + 1 } className="form-active__stock">
                                    <input
                                        type="radio"
                                        id={ item["company"]["symbol"] }
                                        name="active-stock"
                                        value={ index + 1 }
                                    />
                                    <label htmlFor={ item["company"]["symbol"] }>
                                        { item["company"]["symbol"] }
                                    </label>
                                    <div>{ "$"+item["quote"]["close"] }</div>
                                </div>
                            ) : null
                    }
                </div>
            </form>
        );
    }
}

export default StockSelector;
