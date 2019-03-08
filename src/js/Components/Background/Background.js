import React              from "react";
import { Component }      from "react";
import { ScalesConsumer } from "../Context/";

class Background extends Component {
    static contextType = ScalesConsumer;

    render(){
        const { width, height, padding } = this.context.dimensions;

        return(
            <rect
                width={ width - padding*2 }
                height={ height - padding*2 }
                fill="rgb(232, 232, 232)"
                transform={ `translate(${padding}, ${padding})` }
            />
        );
    }
}


export default Background;
