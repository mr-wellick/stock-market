import type { BestMatches, TimeSeriesAPI, TimeSeriesData } from './types';

export async function searchTickers(event: KeyboardEvent) {
	const { value } = event.target as HTMLInputElement;
	const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${
		import.meta.env.ALPHA_VANTAGE_API_KEY
	}`;

	//const demoUrl =
	//	'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo';
	const res = await fetch(url);

	let tickers: BestMatches = { bestMatches: [] };
	try {
		tickers = await res.json();
	} catch (error) {
		console.error('Failed to fetch ticker results', error);
		tickers = { bestMatches: [] };
		return tickers;
	}

	return tickers;
}

export async function getStock(event: MouseEvent) {
	const { dataset } = event.target as HTMLButtonElement;
	const res = await fetch(
		`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${dataset.stock}&apikey=${import.meta.env.ALPHA_VANTAGE_API_KEY}`
	);

	let data: TimeSeriesAPI;

	try {
		data = await res.json();
	} catch (error) {
		console.error(error);
		return [];
	}

	return Object.keys(data['Time Series (Daily)']).map((date) => ({
		x: new Date(date),
		y: +data['Time Series (Daily)'][date]['4. close']
	}));
}
