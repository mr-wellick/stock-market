import { scaleLinear, scaleTime } from 'd3-scale';
import { axisBottom, axisLeft, position } from '../utils/attribute';
import { line } from 'd3-shape';

interface TimeSeries {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

interface APIData {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
  };
  'Time Series (Daily)': { [key: string]: TimeSeries };
}

interface ChartData {
  x: Date;
  y: number;
}

function processData(data: APIData) {
  return Object.keys(data['Time Series (Daily)']).map((item) => ({
    x: new Date(item),
    y: +data['Time Series (Daily)'][item]['4. close'],
  }));
}

async function getSymbol(symbol: string = 'IBM'): Promise<ChartData[] | null> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`,
  );

  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }

  data = processData(data);
  return data.reverse();
}

const data = await getSymbol();
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

export function xAxis() {
  if (!data) {
    console.log(data);
    return;
  }

  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.setAttribute('transform', `translate(0, ${dim.height - dim.padding})`);

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', axisBottom(xScale)!);
  group.append(path);

  const ticks = xScale.ticks().map((datum) => {
    const tickGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    tickGroup.setAttribute('transform', `translate(${position(xScale)(datum)}, 0)`);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('y2', '6');
    line.setAttribute('stroke', '#000');

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('dy', '0.71em');
    text.setAttribute('y', '10');
    text.setAttribute('transform', 'rotate(45)');
    text.innerHTML = `${datum.toLocaleDateString()}`;

    tickGroup.append(line, text);

    return tickGroup;
  });

  group.append(...ticks);

  document.querySelector('#chart')?.append(group);
}

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
