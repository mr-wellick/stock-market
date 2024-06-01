<script lang="ts">
	import { scaleLinear, scaleTime } from 'd3-scale';
	import type { TimeSeriesData } from './types';
	import { axisBottom, position, axisLeft } from './attributes';
	import { line, curveCatmullRom } from 'd3-shape';
	export let data: TimeSeriesData = [];

	const dim = { width: 1300, height: 500, padding: 100, scaleBy: 2 };
    const min = new Date(Math.min(...data.map(item => item.x.getTime())))
    const max= new Date(Math.max(...data.map(item => item.x.getTime())))
	const xScale = scaleTime()
		.domain([min, max])
		.range([dim.padding, dim.width - dim.padding]);
	const yScale = scaleLinear()
		.domain([0, Math.max(...data.map((item) => item.y))])
		.range([dim.height - dim.padding, dim.padding]);
    const lineForData = line<{x: Date, y: number}>()
    .x(datum => xScale(datum.x))
    .y(datum => yScale(datum.y))
    .curve(curveCatmullRom)(data);
</script>

<svg width="1400" height="500">
	<g transform={`translate(0,${dim.height - dim.padding})`}>
		<path d={axisBottom(xScale)} />
		{#each xScale.ticks() as datum}
			<g transform={`translate(${position(xScale)(datum)}, 0)`}>
				<line y2="6" stroke="#000" />
				<text class="text-sm" dy="0.71em" y="10" transform="rotate(45)">
					{datum}
				</text>
			</g>
		{/each}
	</g>
     <g transform={`translate(${dim.padding}, 0)`}>
      <path d={axisLeft(yScale)} />
      {#each yScale.ticks() as tick}
          <g transform={`translate(0, ${position(yScale)(tick)})`}>
            <line x2="-6" stroke="#000" />
            <text class="text-sm" x="-30">
              {tick}
            </text>
          </g>
      {/each}
    </g>
    <g>
      <path fill="none" stroke="black" stroke-width="2" d={lineForData} />
    </g>
</svg>
