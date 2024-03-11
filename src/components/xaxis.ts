type Dimensions = {
  width: number;
  height: number;
  padding: number;
};

class Axis {
  group: SVGGElement;
  dimensions: Dimensions;

  constructor(dimensions: Dimensions) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.dimensions = dimensions;
  }

  orientGroupElement() {
    // x-axis
    this.group.setAttribute(
      'transform',
      `translate(0, ${this.dimensions.height - this.dimensions.padding})`,
    );

    // y-axis
    this.group.setAttribute('transform', `translate(${this.dimensions.padding}, 0)`);
  }
}
