import React         from "react";
import { Component } from "react";

let WithDimensions = (WrappedComponent) => {
    return class extends Component{
        state = {
            width: 300,
            height: 250,
            padding: 40
        }

        render(){
            return(
                <WrappedComponent
                    width={ this.state.width }
                    height={ this.state.height }
                    padding={ this.state.padding }
                    { ...this.props }
                />
            );
        }
    };
};

export default WithDimensions;