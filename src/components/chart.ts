import { scaleTime } from 'd3-scale';
import store from '../state/store';

class DailyTimeSeriesChart extends HTMLElement {
  svg: SVGSVGElement;
  groupForXAxis: SVGGElement;
  //axis: Axis;

  constructor() {
    super();
    this.svg = document.querySelector('svg')!;
    this.groupForXAxis = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  }

  createXAxis() {}

  connectedCallback() {
    const xMin = Math.min(...store.data.map((datum) => datum.x.getTime()));
    const xMax = Math.max(...store.data.map((datum) => datum.x.getTime()));
    const xScale = scaleTime()
      .domain([xMin, xMax])
      .range([store.dimensions.padding, store.dimensions.width - store.dimensions.padding]);
    console.log(xScale.domain);
    console.log(store.data);
  }
}

export default DailyTimeSeriesChart;
