import { max, min } from "d3-array";

class ScaleFinder{
    constructor(xValues, yValues){
        this.xValues = xValues;
        this.yValues = yValues;
    }

    getMinAndMaxOfData(data){
        let Max        = max(data, d => d);
        let Min        = min(data, d => d);
        let scaleRange = [Min, Max];

        return scaleRange;
    }

    getXScale(scaleType){
        let range = this.getMinAndMaxOfData(this.xValues);
        let scale = scaleType().domain(range);

        return scale;
    }

    getYScale(scaleType){
        let range = this.getMinAndMaxOfData(this.yValues);
        let scale = scaleType().domain(range);

        return scale;
    }

}

export default ScaleFinder;
