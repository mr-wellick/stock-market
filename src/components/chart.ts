//import Axis from "../utils/axis";

class DailyTimeSeriesChart extends HTMLElement {
  svg: SVGSVGElement;
  groupForXAxis: SVGGElement;
  groupForYAxis: SVGGElement;
  //axis: Axis;

  constructor() {
    super();
    this.svg = document.querySelector('svg')!;
    this.groupForXAxis = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.groupForYAxis = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  }

  createXAxis() {}

  connectedCallback() {
    console.log(this.svg);
  }
}

export default DailyTimeSeriesChart;
