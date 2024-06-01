<script lang="ts">
	import type { BestMatches, TimeSeriesAPI, TimeSeriesData } from '$lib/types';
	import Graph from '$lib/+graph.svelte';

	let stockTicker = '';
	let tickerList: BestMatches = { bestMatches: [{ '1. symbol': 'IBM' }] };
	let data: TimeSeriesData = [];
	let activeTicker: string;

	async function searchTickers(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockTicker}&apikey=${
				import.meta.env.ALPHA_VANTAGE_API_KEY
			}`;
			const res = await fetch(url);

			try {
				tickerList = await res.json();
			} catch (error) {
				console.error('Failed to fetch ticker results', error);
				tickerList = { bestMatches: [] };
			}
		}
	}

	async function getTicker() {
		//if (!stockTicker) return;

		//const res = await fetch(
		//	`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockTicker}&apikey=${import.meta.env.ALPHA_VANTAGE_API_KEY}`
		//);
		const res = await fetch(
			'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo'
		);

		try {
			const apiData: TimeSeriesAPI = await res.json();
			activeTicker = apiData['Meta Data']['2. Symbol'];
			data = Object.keys(apiData['Time Series (Daily)']).map((date) => ({
				x: new Date(date),
				y: +apiData['Time Series (Daily)'][date]['4. close']
			}));
		} catch (error) {
			data = [];
		}
	}
</script>

<div class="stats shadow bg-base-200 flex m-5">
	<div class="min-w-64">
		<label class="input input-bordered flex items-center gap-2" for="ticker">
			<input
				bind:value={stockTicker}
				on:keypress={searchTickers}
				type="text"
				class="grow"
				placeholder="Search"
				id="ticker"
				name="ticker"
				required
				minlength="3"
				maxlength="8"
				size="10"
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4 opacity-70"
				><path
					fill-rule="evenodd"
					d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
					clip-rule="evenodd"
				/></svg
			>
		</label>

		{#if tickerList.bestMatches}
			<ul class="menu rounded-box min-w-64 flex">
				{#each tickerList.bestMatches as ticker}
					<li>
						<button class="cursor-pointer" data-stock={ticker['1. symbol']} on:click={getTicker}>
							{ticker['2. name']}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	<div class="stat">
		<div class="stat-title">{activeTicker}</div>
		<Graph {data} />
	</div>
</div>
