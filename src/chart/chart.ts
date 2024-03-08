import { scaleTime } from 'd3-scale';

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
  return data;
}

export async function xAxis() {
  const data = await getSymbol();

  if (!data) {
    console.log(data);
    return;
  }

  const min = Math.min(...data.map((datum) => datum.x.getTime()));
  const max = Math.max(...data.map((datum) => datum.x.getTime()));
  const scale = scaleTime().domain([min, max]).range([100, 1400]);

  console.log(scale.domain())
  console.log(scale.range())
}
