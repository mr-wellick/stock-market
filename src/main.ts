import DailyTimeSeriesChart from './components/chart';
import SearchBar from './components/search-bar';
import './main.css';
//import Component from './components/nav';
//import { searchTickers } from './api/alphavantage';
//import getStock from './api/alphavantage';
//import { scaleLinear, scaleTime } from 'd3-scale';
//import AxisUI from './components/axisui';
//import { Orientation } from './utils/axis';
//import { line } from 'd3-shape';

//const header = new Component(
//);
//header.render();

customElements.define('search-bar', SearchBar);
customElements.define('daily-time-series-chart', DailyTimeSeriesChart)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="navbar bg-base-100 border-b border-black">
        <a class="btn btn-ghost text-xl">Stocks</a>
    </div>

    <div class="stats shadow bg-base-200 flex m-5">
        <search-bar>
            <div class="m-2">
              <label class="input input-bordered flex items-center gap-2">
                <input type="text" class="grow" placeholder="Search" id="search"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
              </label>
              <div role="alert" class="mt-1 alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span id="error-message"></span>
              </div>
             <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box mt-1" id="stock-list"/>
            </div>
        </search-bar>
        <div class="stat">
            <div class="stat-title">IBM</div>
            <daily-time-series-chart>
                <svg width="1400" height="500"></svg>
            </daily-time-series-chart>
        </div>
    </div>

    <footer class="footer items-center p-4 bg-neutral text-neutral-content">
      <aside class="items-center grid-flow-col">
        <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
        </a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </nav>
    </footer>
`;

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
