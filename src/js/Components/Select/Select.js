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
                <div className="form-monthly__container-option">
                    <input
                        type="radio"
                        id="monthly"
                        name="stock-type"
                        value="function=TIME_SERIES_MONTHLY_ADJUSTED&"
                        defaultChecked
                    />
                    <label htmlFor="monthly">Monthly</label>
                </div>
                <div className="form-daily__container-option">
                    <input
                        type="radio"
                        id="daily"
                        name="stock-type"
                        value="function=TIME_SERIES_DAILY_ADJUSTED&"
                    />
                    <label htmlFor="daily">Daily</label>
                </div>
            </form>
        );
    }
}

Select.propTypes = {
    userSelection: PropTypes.func
};

export default connect(null, { userSelection })(Select);
