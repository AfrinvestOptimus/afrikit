import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');
// Scaling factors based on a standard width
const BASE_WIDTH = 360;
const BASE_HEIGHT = 812;
const scale = width / BASE_WIDTH; // Base width for scaling
const responsiveFontSize = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * scale);
};
const responsiveWidth = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * (width / BASE_WIDTH));
};
const responsiveHeight = (size: number): number => {
  return PixelRatio.roundToNearestPixel(size * (height / BASE_HEIGHT));
};
const f = responsiveFontSize;
const w = responsiveWidth;
const h = responsiveHeight;
export { f, h, responsiveFontSize, responsiveHeight, responsiveWidth, w };

