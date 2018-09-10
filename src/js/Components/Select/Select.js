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
            <form onChange={ this.onChange } className="form-select">
                <select className="form-select__options">
                    <optgroup label="Stocks">
                        <option value="function=TIME_SERIES_MONTHLY_ADJUSTED&">Monthly Adjusted</option>
                        <option value="function=TIME_SERIES_DAILY_ADJUSTED&">Daily Adjusted</option>
                    </optgroup>
                </select>
            </form>
        );
    }
}

Select.propTypes = {
    userSelection: PropTypes.func,
};

// Map dispatch
let mapDispatch = (dispatch) => {
    return {
        userSelection: (assetType) => {
            dispatch(userSelection(assetType));
        }
    };
};

export default connect(null, mapDispatch)(Select);
