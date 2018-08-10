import { scaleLinear } from "d3-scale";
import { scaleTime }   from "d3-scale";
import { max, min }    from "d3-array";

// Find xScale
export function findXScale(data, width = 500, padding = 10)
{

    // Find x-scale
    let xMin   = min(data, d => d[0]);
    let xMax   = max(data, d => d[0]);
    let xScale = scaleTime().domain([xMin, xMax]);
    xScale.range([padding, width - padding]).nice();

    return(xScale);
}

// Find xScale
export function findYScale(data, height = 300, padding = 10)
{

    // Find y-scale
    let yMin   = min(data, d => d[1]);
    let yMax   = max(data, d => d[1]);
    let yScale = scaleLinear().domain([yMin, yMax]);
    yScale.range([height - padding, padding]).nice();

    return(yScale);
}

// Find percent change for prices
export function findPercentChange(data)
{

    let rmFirstEntry = data.slice(1);
    let rmLastEntry  = data.slice(0, data.length -1 );
    let results      = [];

    for(let i = 0; i < rmFirstEntry.length; i++)
    {
        let numerator     = rmFirstEntry[i] - rmLastEntry[i];
        let denominator   = rmLastEntry[i];
        let percentChange = Number((numerator / denominator).toFixed(2));
        results.push(percentChange);
    }

    return(results);
}
