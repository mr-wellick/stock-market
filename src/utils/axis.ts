import { ScaleLinear, ScaleTime } from 'd3-scale';

enum Orientation {
  top = 1,
  right = 2,
  bottom = 3,
  left = 4,
}

class Axis<ScaleType extends ScaleLinear<number, number> | ScaleTime<number, number>> {
  k: number;
  offset: number;
  range0: number;
  range1: number;
  tickSizeOuter: number;
  scale: ScaleType;
  transform: (point: number) => string;

  constructor(scale: ScaleType) {
    this.k = 0;
    this.offset = 0;
    this.range0 = 0;
    this.range1 = 0;
    this.tickSizeOuter = 1;
    this.scale = scale;
    this.transform = () => '';
  }

  private generateAttributeD(orient: number): string | null {
    this.k = orient === Orientation.top || orient === Orientation.left ? -1 : 1;
    this.offset = typeof window !== 'undefined' && window.devicePixelRatio > 1 ? 0 : 0.5;
    this.range0 = Number(this.scale.range()[0]) + this.offset;
    this.range1 = Number(this.scale.range()[this.scale.range().length - 1]) + this.offset;
    this.transform =
      orient === Orientation.top || orient === Orientation.bottom
        ? this.translateX
        : this.translateY;

    switch (orient) {
      case Orientation.left:
      case Orientation.right: {
        if (this.tickSizeOuter) {
          //'M' + k * tickSizeOuter + ',' + range0 + 'H' + offset + 'V' + range1 + 'H' + k * tickSizeOuter
          return `M${this.k * this.tickSizeOuter},${this.range0}H${this.offset}V${this.range1}H${
            this.k * this.tickSizeOuter
          }`;
        }
        // 'M' + offset + ',' + range0 + 'V' + range1
        return `M${this.offset},${this.range0}V${this.range1}`;
      }
      case Orientation.top:
      case Orientation.bottom: {
        if (this.tickSizeOuter) {
          // "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter
          return `M${this.range0},${this.k * this.tickSizeOuter}V${this.offset}H${this.range1}V${
            this.k * this.tickSizeOuter
          }`;
        }
        // 'M' + range0 + ',' + offset + 'H' + range1;
        return `M${this.range0},${this.offset}H${this.range1}`;
      }
      default:
        break;
    }

    console.error(
      'Axis.generateAttributeD: orientation is invalid -- expected one of the following: ' +
        'left, right, top, bottom but got: %s',
      orient,
    );

    return null;
  }

  /* Following functions generates the appropiate transform attribute for a
   * g element (svg) that will orient the g element (top, bottom, left, right)
   *    - translateX
   *    - translateY
   */
  private translateX(x: number) {
    return `translate(${x}, 0)`;
  }

  private translateY(y: number) {
    return `translate(0, ${y})`;
  }

  /* Following functions generate the appropiate d attribute for the path element (svg)
   *    - axisBottom
   *    - axisTop
   *    - axisLeft
   *    - axisRight
   */
  axisBottom() {
    return this.generateAttributeD(Orientation.bottom);
  }

  axisTop() {
    return this.generateAttributeD(Orientation.top);
  }

  axisLeft() {
    return this.generateAttributeD(Orientation.left);
  }

  axisRight() {
    return this.generateAttributeD(Orientation.right);
  }

  private center() {
    if ('bandwidth' in this.scale && 'round' in this.scale) {
      this.offset = Math.max(0, this.scale.bandwidth() - this.offset * 2) / 2;
      if (this.scale.round()) this.offset = Math.round(this.offset);

      return (d: string): number => Number(this.scale(d)) + this.offset;
    }

    return null;
  }

  // fix this any type
  private number(scale: any) {
    return (d: number): number => Number(scale(d));
  }

  position(scale: ScaleType) {
    if ('bandwidth' in scale) {
      return this.center();
    }

    return this.number(this.scale.copy());
  }
}

export default Axis;
