import './main.css';
import { xAxis } from './chart/chart';

xAxis()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost text-xl">Stocks</a>
  </div>
  <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <svg width="1400" height="500" id="chart">
        </svg>
      </div>
  </div>
`;
