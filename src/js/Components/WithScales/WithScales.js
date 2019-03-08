import React              from "react";
import { Component }      from "react";
import { scaleFinder }    from "../Utilities/";
import { ScalesConsumer } from "../Context/";

class WithScales extends Component {
    static contextType = ScalesConsumer;

   createScale = (aes) => {
        // get data and value to be used for either x or y value
        const { data } = this.context;

        // get values for new scale
        const values   = data.map(item => item[aes]);
        const scaleObj = new scaleFinder(values);

        return scaleObj;
    }

    createScaleType = (aes, componentName) => {
        // create scale
        const scaleObj = this.createScale(aes);

        // determine scaleType
        let scale;

        if((typeof scaleObj.data[0]) === "number")
        {
            scale = scaleObj.getLinearScale().nice();
        }

        if((typeof scaleObj.data[0]) === "object")
            scale = scaleObj.getTimeScale().nice();

        if((typeof scaleObj.data[0]) === "string")
            scale = scaleObj.getOrdinalScale(0.5); // .nice() method not available

        // set the range of both scales
        const { dimensions } = this.context;

        if(componentName === "XAxis" || componentName === "XGrid")
        {
            // spreads our x-axis and x-grid lines horizontally.
            scale.range([dimensions.padding, dimensions.width - dimensions.padding]);
        }
        else if(componentName === "YAxis" || componentName === "YGrid")
        {
            // spreads our y-axis and y-grid lines vertically
            scale.range([dimensions.height - dimensions.padding, dimensions.padding]);
        }

        return scale;
    }

    propCollections(){
        return {
            createScaleType: this.createScaleType
        };
    }

    render(){
        return(
            this.props.children(this.propCollections())
        );
    }
}

export default WithScales;
