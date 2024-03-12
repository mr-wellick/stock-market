//import { ScaleLinear, ScaleTime } from 'd3-scale';
//
//enum Orientation {
//  top = 1,
//  right = 2,
//  bottom = 3,
//  left = 4,
//}
//
//type ScaleType = ScaleTime<number, number> | ScaleLinear<number, number>;
//
//function attribute(scale: ScaleType, orient: number, tickSizeOuter = 1): string | null {
//  const k = orient === Orientation.top || orient === Orientation.left ? -1 : 1;
//  // repeated in other functions: need to keep track of this (change code to classes)
//  const offset = 0;
//  const range0 = Number(scale.range()[0]) + offset;
//  const range1 = Number(scale.range()[1]) + offset;
//
//  switch (orient) {
//    case Orientation.left:
//    case Orientation.right: {
//      if (tickSizeOuter) {
//        //'M' + k * tickSizeOuter + ',' + range0 + 'H' + offset + 'V' + range1 + 'H' + k * tickSizeOuter
//        return `M${k * tickSizeOuter},${range0}H${offset}V${range1}H${k * tickSizeOuter}`;
//      }
//      // 'M' + offset + ',' + range0 + 'V' + range1
//      return `M${offset},${range0}V${range1}`;
//    }
//    case Orientation.top:
//    case Orientation.bottom: {
//      if (tickSizeOuter) {
//        // "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter
//        return `M${range0},${k * tickSizeOuter}V${offset}H${range1}V${k * tickSizeOuter}`;
//      }
//      // 'M' + range0 + ',' + offset + 'H' + range1;
//      return `M${range0},${offset}H${range1}`;
//    }
//    default:
//      break;
//  }
//
//  console.error(
//    'Axis Orientation Error from one of the following: ',
//    axisBottom.name,
//    axisTop.name,
//    axisLeft.name,
//    axisRight.name,
//  );
//
//  return null;
//}
//
//export function axisBottom(scale: ScaleType) {
//  return attribute(scale, Orientation.bottom);
//}
//
//export function axisTop(scale: ScaleType) {
//  return attribute(scale, Orientation.top);
//}
//
//export function axisLeft(scale: ScaleType) {
//  return attribute(scale, Orientation.left);
//}
//
//export function axisRight(scale: ScaleType) {
//  return attribute(scale, Orientation.right);
//}
//
//function center(scale: ScaleType, offset: number) {
//  if ('bandwidth' in scale && 'round' in scale) {
//    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
//    if (scale.round()) offset = Math.round(offset);
//
//    return (d: string): number => Number(scale(d)) + offset;
//  }
//
//  return null;
//}
//
//// fix this any type
//function number(scale: any) {
//  return (d: number): number => Number(scale(d));
//}
//
//export function position(scale: ScaleType) {
//  // repeated in other functions: need to keep track of this (change code to classes)
//  const offset = 0;
//
//  if ('bandwidth' in scale) {
//    return center(scale.copy(), offset);
//  }
//
//  return number(scale.copy());
//}
//
////function translateX(x: number) {
////  return `translate(${x}, 0)`;
////}
////
////function translateY(y: number) {
////  return `translate(0, ${y})`;
////}
////
////export function transform(orient: Orientation) {
////  switch (orient) {
////    case Orientation.top:
////    case Orientation.bottom:
////      return translateX;
////    case Orientation.left:
////    case Orientation.right:
////      return translateY;
////    default:
////      break;
////  }
////
////  return null;
////}
