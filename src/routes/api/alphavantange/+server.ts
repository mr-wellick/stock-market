import type { TimeSeriesAPI } from '$lib/types';
import { error, json } from '@sveltejs/kit';

// https://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object
export const POST = async ({ request }) => {
	const user = await new Response(request.body).json();
	const api = await fetch(
		`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${user.stock}&apikey=${import.meta.env.ALPHA_VANTAGE_API_KEY}`
	);

	let data: TimeSeriesAPI;

	try {
		data = await api.json();
	} catch (error) {
		return new Response(JSON.stringify([]));
	}

	return new Response(JSON.stringify(data));
};
