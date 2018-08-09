import { scaleLinear } from "d3-scale";
import { scaleTime }   from "d3-scale";
import { max, min }    from "d3-array";

// Find xScale
export function findXScale(data, width = 500, padding = 10){

    let xMin      = min(data, d => d[0]);
    let xMax      = max(data, d => d[0]);
    let scale     = scaleTime().domain([xMin, xMax]);
    scale.range([padding, width - padding]);

    return(scale);
}

// Find xScale
export function findYScale(data, height = 460, padding = 10){

    let yMin  = min(data, d => d[1]);
    let yMax  = max(data, d => d[1]);
    let scale = scaleLinear().domain([yMin, yMax]);
    scale.range([height - padding, padding]);

    return(scale);
}
