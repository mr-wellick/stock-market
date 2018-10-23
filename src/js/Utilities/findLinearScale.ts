import { max, min }    from "d3-array";
import { scaleLinear } from "d3-scale";

function findLinearScale(data: Array<number>)
{
    let Max: any = max(data, d => d);
    let Min: any = min(data, d => d);
    let Scale    = scaleLinear().domain([Min, Max]);

    return Scale;
}

export default findLinearScale;
