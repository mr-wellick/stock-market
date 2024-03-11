import { scaleLinear, scaleTime } from 'd3-scale';
import { axisLeft, position } from '../utils/attribute';
import { line } from 'd3-shape';
import getStock from '../api/alphavantage';

const data = await getStock();
const dim = { width: 1400, height: 500, padding: 100, scaleBy: 2 };

const xMin = Math.min(...data!.map((datum) => datum.x.getTime()));
const xMax = Math.max(...data!.map((datum) => datum.x.getTime()));
const xScale = scaleTime()
  .domain([xMin, xMax])
  .range([dim.padding, dim.width - dim.padding]);

const yMax = Math.max(...data!.map((datum) => datum.y));
const yScale = scaleLinear()
  .domain([0, yMax])
  .range([dim.height - dim.padding, dim.padding]);

export function yAxis() {
  if (!data) {
    console.log(data);
    return;
  }

  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('transform', `translate(${dim.padding}, 0)`);

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', axisLeft(yScale)!);
  group.append(path);

  const ticks = yScale.ticks().map((datum) => {
    const tickGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    tickGroup.setAttribute('transform', `translate(0, ${position(yScale)(datum)})`);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x2', '-6');
    line.setAttribute('stroke', '#000');

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '-60');
    text.innerHTML = `${datum}`;

    tickGroup.append(line, text);

    return tickGroup;
  });

  group.append(...ticks);
  document.querySelector('#chart')?.append(group);
}

export function timeSeriesLine() {
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

  document.querySelector('#chart')?.append(group);
}
