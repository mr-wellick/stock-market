import { max, min } from "d3-array";
import { select }   from "d3-selection";

// Find a scale
export function findScale(data, index, scaleType)
{
    let Min   = min(data, d => d[index]);
    let Max   = max(data, d => d[index]);
    let scale = scaleType().domain([Min, Max]);

    return(scale);
}

// Adding axis
export function addAxis(domNode, padding, axisType, scale, checker = true)
{
    let whichPadding;

    if(checker)
        whichPadding = "translate(0," + padding + ")";
    else
        whichPadding = "translate(" + padding + ",0)";

    select(domNode)
        .append("g")
        .attr("transform", whichPadding)
        .call(axisType(scale));
}
