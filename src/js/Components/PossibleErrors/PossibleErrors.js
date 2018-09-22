import React                 from "react";
import { Component }         from "react";
import { Fragment }          from "react";
import PropTypes             from "prop-types";
import { connect }           from "react-redux";
import { DroppedStock }      from "../DroppedStock";
import { ExceededCallLimit } from "../ExceededCallLimit";
import "./possibleErrors.scss";

class PossibleErrors extends Component{
      render(){
        let { errorData }        = this.props;
        let { tooManyCallsData } = this.props;

        return(
            <Fragment>
            {
                (() => {
                    if(errorData.length > 0 && tooManyCallsData.length === 0)
                        return <DroppedStock/>;
                    if(tooManyCallsData.length > 0 && errorData.length === 0)
                        return <ExceededCallLimit/>;
                    else if(errorData.length > 0 && tooManyCallsData.length > 0)
                        return(
                            <Fragment>
                                <DroppedStock/>
                                <ExceededCallLimit/>
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

let mapState = (state) => {
    return {
        ...state.receivedData
    };
};

export default connect(mapState, null)(PossibleErrors);
