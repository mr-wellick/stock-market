import React         from "react";
import { Component } from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./activeStock.scss";

class ActiveStock extends Component{
    onChange = (event) => {
        console.log(event.target.value);
    }

    render(){
        let { successData } = this.props;

        if(successData.length === 0)
            return null;

        return(
            <form onChange={ this.onChange }>
            {
                successData.map( (item, index) =>
                    <div key={ index }>
                        <input
                            type="radio"
                            id={ item["processedData"]["symbol"] }
                            name="active-stock"
                            value={ index }
                        />
                        <label htmlFor={ item["processedData"]["symbol"] }>
                            { item["processedData"]["symbol"] }
                        </label>
                    </div>
                )
            }
            </form>
        );
    }
}

ActiveStock.propTypes = {
    successData: PropTypes.array
};

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(ActiveStock);
