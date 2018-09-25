import React           from "react";
import { Component }   from "react";
import PropTypes       from "prop-types";
import { activeStock } from "../../Redux";
import { connect }     from "react-redux";
import "./activeStock.scss";

class ActiveStock extends Component{
    onChange = (event) => {
        let id = event.target.value;
        this.props.activeStock(id);
    }

    render(){
        let { successData } = this.props;

        if(successData.length === 0)
            return null;

        return(
            <form onChange={ this.onChange } className="form-active">
                <div>
                    <input
                        type="radio"
                        id={ successData[0]["processedData"]["symbol"] }
                        name="active-stock"
                        value={ 0 }
                        defaultChecked
                    />
                    <label htmlFor={ successData[0]["processedData"]["symbol"] }>
                        { successData[0]["processedData"]["symbol"] }
                    </label>
                </div>
            {
                // If we only have one stock, no need to run this code.
                successData.length > 1 ?
                    successData.slice(1).map( (item, index) =>
                        <div key={ index }>
                            <input
                                type="radio"
                                id={ item["processedData"]["symbol"] }
                                name="active-stock"
                                value={ index + 1 }
                            />
                            <label htmlFor={ item["processedData"]["symbol"] }>
                                { item["processedData"]["symbol"] }
                            </label>
                        </div>
                    ) : null
            }
            </form>
        );
    }

    componentDidUpdate(){
        // Once we have data, display first stock in array
        this.props.activeStock(0);
    }
}

ActiveStock.propTypes = {
    activeStock: PropTypes.func,
    successData: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, { activeStock })(ActiveStock);
