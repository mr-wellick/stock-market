import { scaleLinear } from "d3-scale";
import { scaleTime }   from "d3-scale";
import { max, min }    from "d3-array";

// Find xScale
export function findXScale(data, width = 500, padding = 10){

    let lastEntry = data.length - 1;
    let minDate   = data[0][0];
    let maxDate   = data[lastEntry][0];
    let scale     = scaleTime().domain([minDate, maxDate]);

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
