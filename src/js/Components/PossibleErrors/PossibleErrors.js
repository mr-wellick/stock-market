import React            from "react";
import { Component }    from "react";
import { Fragment }     from "react";
import PropTypes        from "prop-types";
import { connect }      from "react-redux";
import { DroppedStock } from "../DroppedStock";
import "./possibleErrors.scss";

class PossibleErrors extends Component{

    state = {
        toggle: false
    }

    onClick = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render(){
        let { errorData }        = this.props;
        let { tooManyCallsData } = this.props;
        let { toggle }           = this.state;

        return(
            <Fragment>
            {
                (() => {
                    if(errorData.length > 0 && tooManyCallsData.length === 0)
                        return <DroppedStock errorData={ errorData } onClick={ this.onClick } toggle={ toggle }/>;
                })()
            }
            </Fragment>
        );
    }
}

PossibleErrors.propTypes = {
    errorData: PropTypes.array,
    tooManyCallsData: PropTypes.array,
};

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(PossibleErrors);
