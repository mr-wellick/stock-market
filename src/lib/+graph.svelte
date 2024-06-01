<script lang="ts">
	import { scaleLinear, scaleTime } from 'd3-scale';
	import type { TimeSeriesData } from './types';
	import { axisBottom, position } from './attributes';
	export let data: TimeSeriesData = [];

	const dim = { width: 1300, height: 500, padding: 100, scaleBy: 2 };
	const xScale = scaleTime()
		.domain(data.map((item) => item.x))
		.range([dim.padding, dim.width - dim.padding]);
	// const yScale = scaleLinear()
	// 	.domain([0, Math.max(...data.map((item) => item.g))])
	// 	.range([dim.height - dim.padding, dim.padding]);
</script>

<svg width="1400" height="500">
	<g transform={`translate(0,${dim.height - dim.padding})`}>
		<path d={axisBottom(xScale)} />
		<!-- {#each data as datum}
			<g transform={`translate(${position(xScale)(datum.x)}, 0)`}>
				<line y2="6" stroke="#000" />
				<text class="text-sm" dy="0.71em" y="10" transform="rotate(45)">
					{datum.x}
				</text>
			</g>
		{/each} -->
	</g>
</svg>
