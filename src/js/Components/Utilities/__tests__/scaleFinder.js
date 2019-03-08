import { scaleFinder } from "../../Utilities/";
import uniq            from "lodash.uniq";
import mpg             from "../../__development__/Data/mpg.json";

test("constructor initialization", () => {
    // get x-values or y-values first
    const xValues = mpg.map(item => item.hwy);

    // create new scale object and retrieve data
    const data = new scaleFinder(xValues).data;

    // xValues.length and data.length should be the same length
    expect(data).toHaveLength(xValues.length);
});

test("interval method is executed correctly", () => {
    // get x-values or y-values first
    const xValues = mpg.map(item => item.hwy);

    // get MIN and MAX values from xValues
    const MIN = Math.min(...xValues);
    const MAX = Math.max(...xValues);

    // create new scale object and retrive interval
    const scale = new scaleFinder(xValues);
    const interval = scale.getInterval();

    // interval values should have the same values as MIN and MAX
    expect(interval[0]).toEqual(MIN);
    expect(interval[1]).toEqual(MAX);
});

test("creation of linear scale", () => {
    // get x-values or y-values first
    const xValues = mpg.map(item => item.hwy);

    // get linear scale
    const scale = new scaleFinder(xValues).getLinearScale();

    // call domain method to check scale initialization 
    // scale.domain() should contain two values
    expect(scale.domain()).toHaveLength(2);
});

test("creation of time scale", () => {
    // need JavaScript date objects for this
    const dates = [new Date("01-01-2010"), new Date("01-01-2020")];

    // get time scale
    const scale = new scaleFinder(dates).getTimeScale();

    // call domain method to check scale initialization
    // scale.domain() should contain two values
    expect(scale.domain()).toHaveLength(2);
});

test("creation of ordinal scale", () => {
    // get x-values or y-values first
    const xValues    = mpg.map(item => item.manufacturer);
    const categories = uniq(xValues); // get unique entries only

    // get ordinal scale
    const scale = new scaleFinder(categories).getOrdinalScale();

    // call domain method to check scale initialization
    // scale.domain() should have the same length as categories
    expect(scale.domain()).toHaveLength(categories.length);
});