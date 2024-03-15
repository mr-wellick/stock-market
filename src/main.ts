import './main.css';
import Component from './components/nav';
import { searchTickers } from './api/alphavantage';
//import getStock from './api/alphavantage';
//import { scaleLinear, scaleTime } from 'd3-scale';
//import AxisUI from './components/axisui';
//import { Orientation } from './utils/axis';
//import { line } from 'd3-shape';

const header = new Component(
  `<div class="navbar bg-base-100">
     <a class="btn btn-ghost text-xl">Stocks</a>
   </div>`,
);
header.render();

const searchBar = new Component(
  `<label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Search" id="search"/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
   </label>`,
);
searchBar.render();

document.querySelector('#search')?.addEventListener('change', async (event: Event) => {
  // @ts-ignore
  const results = await searchTickers(event.target.value);
  if (!results) {
    console.log('no results');
    return;
  }
  console.log(results.bestMatches);
});

//const hero = new Component(
//  `<div class="hero min-h-screen bg-base-200">
//   <svg id="daily-chart" width="1400" height="500"/>
//  </div>`,
//);
//hero.render();

//const dim = { width: 1400, height: 500, padding: 100, scaleBy: 2 };
//
//async function getData() {
//  const data = await getStock();
//
//  if (!data) {
//    console.error('Unable to retrieve data');
//  } else {
//    const xMin = Math.min(...data.map((datum) => datum.x.getTime()));
//    const xMax = Math.max(...data.map((datum) => datum.x.getTime()));
//    const xScale = scaleTime()
//      .domain([xMin, xMax])
//      .range([dim.padding, dim.width - dim.padding]);
//
//    const xaxis = new AxisUI(dim, xScale, data, Orientation.bottom);
//    document.querySelector<SVGSVGElement>('#daily-chart')?.append(xaxis.group);
//
//    const yMax = Math.max(...data!.map((datum) => datum.y));
//    const yScale = scaleLinear()
//      .domain([0, yMax])
//      .range([dim.height - dim.padding, dim.padding]);
//
//    const yaxis = new AxisUI(dim, yScale, data, Orientation.left);
//    document.querySelector<SVGSVGElement>('#daily-chart')?.append(yaxis.group);
//
//    const shape = line<{ x: Date; y: number }>()
//      .x((d) => xScale(d.x))
//      .y((d) => yScale(d.y));
//
//    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//    path.setAttribute('d', shape(data!)!);
//    path.setAttribute('stroke', '#000');
//    path.setAttribute('fill', 'none');
//    path.setAttribute('strokeWidth', '2');
//
//    group.append(path);
//
//    document.querySelector('#daily-chart')?.append(group);
//  }
//}
//
//getData();
