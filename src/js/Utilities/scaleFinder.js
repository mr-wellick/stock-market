import { max, min }    from "d3-array";
import { scaleLinear } from "d3-scale";
import { scaleTime }   from "d3-scale";
import { scaleBand }   from "d3-scale";

class ScaleFinder {
    constructor(data){
        this.data = data;
    }

    getInterval(){
        const MAX      = max(this.data, d => d);
        const MIN      = min(this.data, d => d);
        const interval = [MIN, MAX];

        return interval;
    }

    getLinearScale(){
        const interval = this.getInterval();
        const scale    =  scaleLinear().domain(interval);

        return scale;
    }

    getTimeScale(){
        const interval = this.getInterval();
        const scale    = scaleTime().domain(interval);

        return scale;
    }

    getOrdinalScale(binWidth){
        const scale = scaleBand().domain(this.data);
        scale.padding([binWidth]);

        return scale;
    }
}

export default ScaleFinder;
