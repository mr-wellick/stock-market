import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import "./stockSelector.scss";

class StockSelector extends Component{
    static propTypes = {
        stockData: PropTypes.array,
        onChange: PropTypes.func,
        deleteStock: PropTypes.func,
        activeIndex: PropTypes.number
    }

    render(){
        let { stockData, activeIndex } = this.props;

        if(stockData.length === 0)
            return null;

        return(
            <form className="active-stock__form">
            {
                stockData.map( (item, index) =>
                    <div key={ index } className="active-stock__container">
                        <button
                            id="delete-stock"
                            onClick={ this.props.deleteStock }
                            className={ item["company"]["symbol"] }
                        >X</button>
                        <input
                            type="radio"
                            id={ item["company"]["symbol"] }
                            name="active-stock"
                            value={ index }
                            checked={ activeIndex == index }
                            onChange={ this.props.onChange }
                        />
                        <label htmlFor={ item["company"]["symbol"] }>
                            { item["company"]["symbol"] }
                        </label>
                    </div>
                )
            }
            </form>
        );
    }
}

export default StockSelector;
