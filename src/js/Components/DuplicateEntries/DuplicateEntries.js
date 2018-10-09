import React                     from "react";
import { Component }             from "react";
import PropTypes                 from "prop-types";
import { connect }               from "react-redux";
import { resetDuplicateEntries } from "../../Redux/";
import "./duplicateEntries.scss";

class DuplicateEntries extends Component{
    static propTypes = {
        duplicateEntries: PropTypes.array,
        resetDuplicateEntries: PropTypes.func
    }

    onClick = () => {
        this.props.resetDuplicateEntries();
    }

    render(){
        let { duplicateEntries } = this.props;
        return(
            <div className="dialog-duplicate">
                <div className="dialog-duplicate__message">
                    <p>
                        <strong>Sorry! </strong>
                        Entered duplicate stock(s) and will not retrieve the following:
                    </p>
                    <a onClick={ this.onClick } className="dialog-duplicate__toggler">x</a>
                </div>
                <ul>
                {
                    duplicateEntries.map( (item, index) =>
                        <li key={ index }>{ item }</li>
                    )
                }
                </ul>
            </div>
        );
    }
}

let mapState = (state) => {
    return {
        ...state.fetchData
    };
};

export default connect(mapState, { resetDuplicateEntries })(DuplicateEntries);
