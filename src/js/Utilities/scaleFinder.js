import { max, min }    from "d3-array";
import { scaleLinear } from "d3-scale";
import { scaleTime }   from "d3-scale";
import { scaleBand }   from "d3-scale";

class ScaleFinder {
    constructor(data){
        this.data = data;
    }

    getInterval(){
        let MAX      = max(this.data, d => d);
        let MIN      = min(this.data, d => d);
        let interval = [MIN, MAX];

        return interval;
    }

    getLinearScale(){
        let interval = this.getInterval();
        let scale    =  scaleLinear().domain(interval);

        return scale;
    }

    getTimeScale(){
        let interval = this.getInterval();
        let scale    = scaleTime().domain(interval);

        return scale;
    }

    getOrdinalScale(binWidth){
        let scale = scaleBand().domain(this.data);
        scale.padding([binWidth]);

        return scale;
    }
}

export default ScaleFinder;
