import React              from "react";
import { Component }      from "react";
import PropTypes          from "prop-types";
import { ScalesProvider } from "../Context/";
import { WithScales }     from "../WithScales/";

class GEOMS extends Component {
    static propTypes = {
        data: PropTypes.array,
        aes: PropTypes.array,
        dimensions: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
            padding: PropTypes.number
        }),
        className: PropTypes.string,
        children: PropTypes.any
    }

    render(){
        const { dimensions, className } = this.props;

        return(
            <ScalesProvider value={ this.props }>
                <svg width={ dimensions.width } height={ dimensions.height } className={ className }>
                    <WithScales>
                        {({ createScaleType }) => (
                        <>
                            {/*
                              * Here, we clone each child passed into <GEOMS/> to
                              * get acces to createScaleType so that <GEOMS/> is modular
                              */}
                            {React.Children.map(this.props.children, child => {
                                return React.cloneElement(child, {
                                    createScaleType: createScaleType
                                });
                            })}
                        </>
                        )}
                    </WithScales>
                </svg>
            </ScalesProvider>
        );
    }
}

export default GEOMS;
