import { max, min } from "d3-array";

class ScaleFinder{
    constructor(data){
        this.data = data;
    }

    getInterval(data){
        let MAX      = max(data, d => d);
        let MIN      = min(data, d => d);
        let interval = [MIN, MAX];
        return interval;
    }

    getScale(scaleType){
        let interval = this.getInterval(this.data);
        let scale    = scaleType().domain(interval);
        return scale;
    }
}

export default ScaleFinder;
