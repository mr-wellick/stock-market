import { scaleLinear } from "d3-scale";
import { scaleTime }   from "d3-scale";
import { max, min }    from "d3-array";

// Find xScale
export function findXScale(data, width = 500, padding = 10){

    // Find x-scale
    let xMin   = min(data, d => d[0]);
    let xMax   = max(data, d => d[0]);
    let xScale = scaleTime().domain([xMin, xMax]);
    xScale.range([padding, width - padding]);

    return(xScale);
}

// Find xScale
export function findYScale(data, height = 300, padding = 10){

    // Find y-scale
    let yMin   = min(data, d => d[1]);
    let yMax   = max(data, d => d[1]);
    let yScale = scaleLinear().domain([yMin, yMax]);
    yScale.range([height - padding, padding]);

    return(yScale);
}
