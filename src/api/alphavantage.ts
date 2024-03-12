import { APIData, ChartData } from "./apitypes";

function reshape(data: APIData): ChartData[] {
  return Object.keys(data['Time Series (Daily)']).map((date) => ({
    x: new Date(date),
    y: +data['Time Series (Daily)'][date]['4. close'],
  }));
}

async function getStock(symbol: string = 'IBM'): Promise<ChartData[] | null> {
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

  data = reshape(data);
  return data.reverse();
}

export default getStock
