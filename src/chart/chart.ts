import { scaleTime } from 'd3-scale';
import { axisBottom } from '../utils/attribute';

interface MetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Output Size': string;
  '5. Time Zone': string;
}

interface TimeSeries {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

interface APIData {
  'Meta Data': MetaData;
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

export async function xAxis() {
  const data = await getSymbol();
  const dim = { width: 1400, height: 500, padding: 100, scaleBy: 2 };

  if (!data) {
    console.log(data);
    return;
  }

  const min = Math.min(...data.map((datum) => datum.x.getTime()));
  const max = Math.max(...data.map((datum) => datum.x.getTime()));
  const scale = scaleTime()
    .domain([min, max])
    .range([dim.padding, dim.width - dim.padding]);

  const group = document.createElement('g');
  group.setAttribute('transform', `translate(0, ${dim.height - dim.padding})`);

  const path = document.createElement('path');
  path.setAttribute('d', axisBottom(scale)!);
  group.append(path);

  const ticks = scale.ticks().map((datum) => {
    const tickGroup = document.createElement('g');
    tickGroup.setAttribute('transform', `translate(${scale(datum)}, 0)`);

    const line = document.createElement('line');
    line.setAttribute('y2', '6');
    line.setAttribute('stroke', '#000');

    const text = document.createElement('text');
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
