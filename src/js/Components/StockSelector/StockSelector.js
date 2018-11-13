import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import "./stockSelector.scss";

class StockSelector extends Component{
    static propTypes = {
        successData: PropTypes.array,
        onChange: PropTypes.func
    }

    render(){
        let { successData } = this.props;
        if(successData.length === 0)
            return null;

        return(
            <form onChange={ this.props.onChange } className="form-active">
                <div className="form-active__container">
                    <div>
                        <input
                            type="radio"
                            id={ successData[0]["stockName"] }
                            name="active-stock"
                            value={ 0 }
                            defaultChecked
                        />
                        <label htmlFor={ successData[0]["stockName"] }>
                            { successData[0]["stockName"] }
                        </label>
                    </div>
                    {
                        // If we only have one stock, no need to run this code.
                        successData.length > 1 ?
                            // Remove first entry and bump indices + 1
                            successData.slice(1).map( (item, index) =>
                                <div key={ index + 1 }>
                                    <input
                                        type="radio"
                                        id={ item["stockName"] }
                                        name="active-stock"
                                        value={ index + 1 }
                                    />
                                    <label htmlFor={ item["stockName"] }>
                                        { item["stockName"] }
                                    </label>
                                </div>
                            ) : null
                    }
                </div>
            </form>
        );
    }
}

export default StockSelector;
