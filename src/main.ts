import './main.css';
import Component from './components/nav';
import getStock from './api/alphavantage';
import { scaleLinear, scaleTime } from 'd3-scale';
import AxisUI from './components/axisui';
import { Orientation } from './utils/axis';
import { line } from 'd3-shape';

const header = new Component(
  `<div class="navbar bg-base-100">
     <a class="btn btn-ghost text-xl">Stocks</a>
   </div>`,
);
header.render();

const hero = new Component(
  `<div class="hero min-h-screen bg-base-200">
   <svg id="daily-chart" width="1400" height="500"/>
  </div>`,
);
hero.render();

const dim = { width: 1400, height: 500, padding: 100, scaleBy: 2 };

async function getData() {
  const data = await getStock();

  if (!data) {
    console.error('Unable to retrieve data');
  } else {
    const xMin = Math.min(...data.map((datum) => datum.x.getTime()));
    const xMax = Math.max(...data.map((datum) => datum.x.getTime()));
    const xScale = scaleTime()
      .domain([xMin, xMax])
      .range([dim.padding, dim.width - dim.padding]);

    const xaxis = new AxisUI(dim, xScale, data, Orientation.bottom);
    document.querySelector<SVGSVGElement>('#daily-chart')?.append(xaxis.group);

    const yMax = Math.max(...data!.map((datum) => datum.y));
    const yScale = scaleLinear()
      .domain([0, yMax])
      .range([dim.height - dim.padding, dim.padding]);

    const yaxis = new AxisUI(dim, yScale, data, Orientation.left);
    document.querySelector<SVGSVGElement>('#daily-chart')?.append(yaxis.group);

    const shape = line<{ x: Date; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', shape(data!)!);
    path.setAttribute('stroke', '#000');
    path.setAttribute('fill', 'none');
    path.setAttribute('strokeWidth', '2');

    group.append(path);

    document.querySelector('#daily-chart')?.append(group);
  }
}

getData();
