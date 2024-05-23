import type { BestMatches } from '$lib/types';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		//const data = await request.formData();
		//const ticker = data.get('ticker');
		//const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${
		//	import.meta.env.ALPHA_VANTAGE_API_KEY
		//}`;

		const demoUrl =
			'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo';
		const res = await fetch(demoUrl);

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
} satisfies Actions;
