import './main.css';
import Component from './components/nav';
import getStock from './api/alphavantage';
import { scaleTime } from 'd3-scale';
import XAxis from './components/xaxis';

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

const data = await getStock();
const dim = { width: 1400, height: 500, padding: 100, scaleBy: 2 };

if (!data) {
  console.error('Unable to retrieve data');
} else {
  const xMin = Math.min(...data.map((datum) => datum.x.getTime()));
  const xMax = Math.max(...data.map((datum) => datum.x.getTime()));
  const xScale = scaleTime()
    .domain([xMin, xMax])
    .range([dim.padding, dim.width - dim.padding]);

  const xaxis = new XAxis(dim, xScale, data);

  document.querySelector<SVGSVGElement>('#daily-chart')?.append(xaxis.group);
}
