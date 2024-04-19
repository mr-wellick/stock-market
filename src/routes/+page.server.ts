import type { Actions } from './$types';

export const actions = {
	tickers: async (event) => {
		console.log(event);
		//const res = await fetch(
		//	`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${
		//		import.meta.env.ALPHA_VANTAGE_API_KEY
		//	}`
		//);

		//let tickers;
		//try {
		//	tickers = await res.json();
		//} catch (error) {
		//	console.error('Failed to fetch ticker results', error);
		//	tickers = null;
		//	return;
		//}

		//return ticker;
	}
} satisfies Actions;
