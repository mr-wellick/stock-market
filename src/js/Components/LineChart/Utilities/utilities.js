import { max, min }    from "d3-array";

// Find a scale
export default function findScale(data, index, scaleType)
{
    let Min   = min(data, d => d[index]);
    let Max   = max(data, d => d[index]);
    let scale = scaleType().domain([Min, Max]);

    return(scale);
}
