import React                   from "react";
import PropTypes               from "prop-types";
import { Component }           from "react";
import { StockMarketConsumer } from "../../Context/stockMarketContext.js";
import "./stockSelector.scss";

class StockSelector extends Component{
    static contextType = StockMarketConsumer;

    static propTypes = {
        setActiveIndex: PropTypes.func
    }

    render(){
        let { stockMarketData, activeIndex } = this.context;

        return(
            <>
            { stockMarketData.length === 0 ? null :
                <form className="active-stock__form">
                {
                    stockMarketData.map( (item, index) => (
                        <div key={ index } className="active-stock__container">
                            <input
                                type="radio"
                                id={ item["company"]["symbol"] }
                                name="active-stock"
                                value={ index }
                                checked={ activeIndex === index }
                                onChange={ this.props.setActiveIndex }
                            />
                            <label htmlFor={ item["company"]["symbol"] }>
                                { item["company"]["symbol"] }
                            </label>
                        </div>
                    ))
                }
                </form>
            }
            </>
        );
    }
}

export default StockSelector;
