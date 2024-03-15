import { APIData, TickerSearch, ChartData } from './apitypes';

function reshape(data: APIData): ChartData[] {
  return Object.keys(data['Time Series (Daily)']).map((date) => ({
    x: new Date(date),
    y: +data['Time Series (Daily)'][date]['4. close'],
  }));
}

export async function getStock(symbol: string = 'IBM'): Promise<ChartData[] | null> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`,
  );

  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }

  data = reshape(data);
  return data.reverse();
}

export async function searchTickers(ticker: string): Promise<TickerSearch | null> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${
      import.meta.env.ALPHA_VANTAGE_API_KEY
    }`,
  );
  let data: TickerSearch;

  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }

  return data;
}
