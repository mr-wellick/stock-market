import type { ScaleLinear, ScaleTime } from 'd3-scale';
import Axis, { Orientation } from '../utils/axis';
import { ChartData } from '../api/apitypes';

type Dimensions = {
  width: number;
  height: number;
  padding: number;
};

// fix generics
class AxisUI<ScaleType extends ScaleLinear<number, number> | ScaleTime<number, number>> {
  group: SVGGElement;
  dimensions: Dimensions;
  scale: ScaleType;
  axis: Axis<ScaleType>;
  data: ChartData[];
  orientation: Orientation;

  constructor(
    dimensions: Dimensions,
    scale: ScaleType,
    data: ChartData[],
    orientation: Orientation,
  ) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.dimensions = dimensions;
    this.scale = scale;
    this.axis = new Axis(this.scale);
    this.data = data;
    this.orientation = orientation;

    this.renderPath();
    this.orientGroupElement();
    this.renderTicks();
  }

  orientGroupElement() {
    switch (this.axis.orientationValue) {
      // x-axis
      case Orientation.top:
      case Orientation.left: {
        this.group.setAttribute('transform', `translate(${this.dimensions.padding}, 0)`);
        break;
      }
      // y-axis
      case Orientation.bottom:
      case Orientation.right: {
        this.group.setAttribute(
          'transform',
          `translate(0, ${this.dimensions.height - this.dimensions.padding})`,
        );
        break;
      }
      default:
        console.error(
          'Axis.orientGroupElement: orientation is invalid -- expected one of the following: ' +
            'left, right, top, bottom but got: %s',
          this.axis.orientationValue,
        );
        break;
    }
  }

  renderPath() {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    let attribute;

    switch (this.orientation) {
      case Orientation.top:
        attribute = this.axis.axisTop();
        break;
      case Orientation.bottom:
        attribute = this.axis.axisBottom();
        break;
      case Orientation.left:
        attribute = this.axis.axisLeft();
        break;
      case Orientation.right:
        attribute = this.axis.axisRight();
        break;
    }

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
      switch (this.axis.orientationValue) {
        // y-axis
        case Orientation.top:
        case Orientation.left: {
          tickGroup.setAttribute(
            'transform',
            // @ts-ignore
            `translate(0, ${this.axis.position(this.scale)(datum)})`,
          );

          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x2', '-6');
          line.setAttribute('stroke', '#000');

          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.setAttribute('x', '-60');
          text.innerHTML = `${datum}`;

          tickGroup.append(line, text);
          break;
        }
        // x-axis
        case Orientation.bottom:
        case Orientation.right: {
          tickGroup.setAttribute(
            'transform',
            // @ts-ignore
            `translate(${this.axis.position(this.scale)(datum)}, 0)`,
          );

          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('y2', '6');
          line.setAttribute('stroke', '#000');

          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.setAttribute('dy', '0.71em');
          text.setAttribute('y', '10');
          text.setAttribute('transform', 'rotate(45)');
          // @ts-ignore
          text.innerHTML = `${datum.toLocaleDateString()}`;

          tickGroup.append(line, text);
          break;
        }
        default:
          break;
      }

      return tickGroup;
    });

    this.group.append(...ticks);
  }
}

export default AxisUI;
