import type { ScaleLinear, ScaleTime } from 'd3-scale';
import Axis from '../utils/axis';
import { ChartData } from '../api/apitypes';

type Dimensions = {
  width: number;
  height: number;
  padding: number;
};

class XAxis<ScaleType extends ScaleLinear<number, number> | ScaleTime<number, number>> {
  group: SVGGElement;
  dimensions: Dimensions;
  scale: ScaleType;
  axis: Axis<ScaleType>;
  data: ChartData[];

  constructor(dimensions: Dimensions, scale: ScaleType, data: ChartData[]) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.dimensions = dimensions;
    this.scale = scale;
    this.axis = new Axis(this.scale);
    this.data = data;

    this.orientGroupElement();
    this.renderPath();
    this.renderTicks()
  }

  orientGroupElement() {
    // x-axis
    this.group.setAttribute(
      'transform',
      `translate(0, ${this.dimensions.height - this.dimensions.padding})`,
    );

    // y-axis
    //this.group.setAttribute('transform', `translate(${this.dimensions.padding}, 0)`);
  }

  renderPath() {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const attribute = this.axis.axisBottom();

    if (!attribute) {
      console.error(
        'Axis.renderPath: scale is invalid -- expected a d3 scale like: ' +
          'ScaleTime or ScaleLinear but got: %s',
        this.scale,
      );
      return;
    }

    path.setAttribute('d', attribute);
    this.group.append(path);
  }

  renderTicks() {
    const ticks = this.scale.ticks().map((datum) => {
      const tickGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      tickGroup.setAttribute(
        'transform',
        `translate(${this.axis.position(this.scale)(datum)}, 0)`,
      );

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('y2', '6');
      line.setAttribute('stroke', '#000');

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('dy', '0.71em');
      text.setAttribute('y', '10');
      text.setAttribute('transform', 'rotate(45)');
      text.innerHTML = `${datum.toLocaleDateString()}`;

      tickGroup.append(line, text);

      return tickGroup;
    });

    this.group.append(...ticks);
  }
}

export default XAxis;
