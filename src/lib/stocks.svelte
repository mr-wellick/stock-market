<script lang="ts">
	import { useQueryClient, createQuery } from '@tanstack/svelte-query';
	import { searchTickers } from './data';

	const client = useQueryClient();
	// todo: read docs
	//const tickers = createQuery<BestMatches, Error>({
	//	queryKey: [],
	//	queryFn: () => searchTickers
	//});
</script>

<div class="min-w-64">
	<label class="input input-bordered flex items-center gap-2" for="ticker">
		<input
			type="text"
			class="grow"
			placeholder="Search"
			id="ticker"
			name="ticker"
			required
			minlength="4"
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

	<!-- {#if tickers.length}
		<ul class="menu rounded-box min-w-64 flex">
			{#each tickers as ticker}
				<button class="cursor-pointer" on:click={getStock} data-stock={ticker['1. symbol']}>
					{ticker['2. name']}
				</button>
			{/each}
		</ul>
	{/if} -->
</div>
