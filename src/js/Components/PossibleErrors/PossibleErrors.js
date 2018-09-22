import React         from "react";
import { Component } from "react";
import { Fragment }  from "react";
import PropTypes     from "prop-types";
import { connect }   from "react-redux";
import "./possibleErrors.scss";

let DroppedStock = (props) => {
    // Data is store in array. Take first entry to access error message
    let { errorMessage } = props.errorData[0];
    let { toggle }       = props;

    return(
        <div className="dropped-stock">
            <div className={ toggle ? "dropped-stock__message--hide" : "" }>
                { errorMessage }
            </div>
            <div className="dropped-stock__toggler" onClick={ props.onClick }>X</div>
        </div>
    );
};

let TooManyCalls = (props) => {
    // Data is store in array. Take first entry to access error message
    let { errorMessage } = props.tooManyCallsData[0];

    return(
        <div>{ errorMessage }</div>
    );
};

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

                    if(tooManyCallsData.length > 0 && errorData.length === 0)
                        return <TooManyCalls tooManyCallsData={ tooManyCallsData }/>;

                    if(errorData.length > 0 && tooManyCallsData.length > 0)
                        return(
                            <Fragment>
                                <DroppedStock errorData={ errorData }/>
                                <TooManyCalls tooManyCallsData={ tooManyCallsData }/>
                            </Fragment>
                        );
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

DroppedStock.propTypes = {
    errorData: PropTypes.array,
    onClick: PropTypes.func,
    toggle: PropTypes.bool
};

TooManyCalls.propTypes = {
    tooManyCallsData: PropTypes.array
};


let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(PossibleErrors);
