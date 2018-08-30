import React, { Component } from "react";
import PropTypes            from "prop-types";
import { userSelection }    from "../../Redux";
import { connect }          from "react-redux";
import "./select.scss";

class Select extends Component{
    onChange = (event) => {
        let assetType = event.target.value;
        this.props.userSelection(assetType);
    }

    render(){
        return(
            <form onChange={ this.onChange }>
                <select>
                    <optgroup label={ this.props.label }>
                        {
                            this.props.stockDataTypes.map( (item, key) => 
                                <option key={ key } value={item[1]}>{ item[0] }</option>
                            )
                        }
                    </optgroup>
                </select>
            </form>
        );
    }
}

Select.propTypes = {
    label: PropTypes.string,
    stockDataTypes: PropTypes.array,
    userSelection: PropTypes.func
};

// Map state
let mapState = (state) => {
    return {
        ...state.userInteraction
    };
};

let mapDispatch = (dispatch) => {
    return {
        userSelection: (assetType) => {
            dispatch(userSelection(assetType));
        }
    };
};

export default connect(mapState, mapDispatch)(Select);