import React         from "react";
import PropTypes     from "prop-types";
import { Component } from "react";
import "./stockSelector.scss";

class StockSelector extends Component{
    static propTypes = {
        stockData: PropTypes.array,
        onChange: PropTypes.func,
        deleteStock: PropTypes.func
    }

    state = {
        activeIndex: 0
    }

    onSelectStock = (event) => {
        this.setState({
            activeIndex: Number(event.target.value)
        });
    }

    render(){
        let { stockData }   = this.props;
        let { activeIndex } = this.state;

        if(stockData.length === 0)
            return null;

        return(
            <form onChange={ this.props.onChange } className="active-stock__form">
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
                            checked={ activeIndex === index }
                            onChange={ this.onSelectStock }
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
