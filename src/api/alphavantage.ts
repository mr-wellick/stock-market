import { TimeSeriesAPI, BestMatches, TimeSeriesData } from './apitypes';

export async function getStock(symbol: string = 'IBM'): Promise<TimeSeriesData[] | null> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`,
  );

  let tickerData: TimeSeriesAPI;
  try {
    tickerData = await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }

  return Object.keys(tickerData['Time Series (Daily)']).map((date) => ({
    x: new Date(date),
    y: +tickerData['Time Series (Daily)'][date]['4. close'],
  }));
}

export async function searchTickers(ticker: string): Promise<BestMatches | null> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${
      import.meta.env.ALPHA_VANTAGE_API_KEY
    }`,
  );

  let tickerResults: BestMatches;
  try {
    tickerResults = await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }

  return tickerResults;
}
