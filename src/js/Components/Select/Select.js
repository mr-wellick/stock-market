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
        let { stockDataTypes } = this.props;
        return(
            <form onChange={ this.onChange } className="section-form__select">
                <select>
                    <optgroup label={ this.props.label }>
                    {
                        stockDataTypes.map( (item, key) =>
                            <option key={ key } value={ item[1] }>
                                { item[0] }
                            </option>
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
    userSelection: PropTypes.func,
    className: PropTypes.string
};

// Map state
let mapState = (state) => {
    return {
        ...state.userInteraction
    };
};

// Map dispatch
let mapDispatch = (dispatch) => {
    return {
        userSelection: (assetType) => {
            dispatch(userSelection(assetType));
        }
    };
};

export default connect(mapState, mapDispatch)(Select);
