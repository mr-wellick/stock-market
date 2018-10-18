import { scaleLinear } from "d3-scale";

function findLinearScale(data: Array<number>)
{
    let Max: number = Math.max(...data);
    let Min: number = Math.min(...data);
    let Scale       = scaleLinear().domain([Min, Max]);

    return Scale;
}

export default findLinearScale;