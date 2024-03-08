import './main.css';
import { timeSeriesLine, xAxis, yAxis } from './chart/chart';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost text-xl">Stocks</a>
  </div>
  <div class="hero min-h-screen bg-base-200">
    <svg id="chart" width="1400" height="500"/>
  </div>
`;

xAxis();
yAxis();
timeSeriesLine();
