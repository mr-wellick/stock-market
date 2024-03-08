import './main.css';
import { xAxis } from './chart/chart';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost text-xl">Stocks</a>
  </div>
  <div class="hero min-h-screen bg-base-200">
    <svg width="1400" height="500" id="chart" xmlns="http://www.w3.org/2000/svg">
    </svg>
  </div>
`;

xAxis();
