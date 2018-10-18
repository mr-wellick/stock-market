import { max, min }  from "d3-array";
import { scaleTime } from "d3-scale";

function findTimeScale(data: Array<number>)
{
    let Max: any = max(data, d => new Date(d));
    let Min: any = min(data, d => new Date(d));
    let Scale    = scaleTime().domain([Min, Max]);

    return Scale;
}

export default findTimeScale;
