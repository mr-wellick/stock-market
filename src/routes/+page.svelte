<script lang="ts">
	import Stocks from '$lib/stocks.svelte';
</script>

<div class="stats shadow bg-base-200 flex m-5">
	<Stocks />
	<div class="stat">
		<div class="stat-title">IBM</div>
		<svg width="100%" height="500"></svg>
	</div>
</div>
