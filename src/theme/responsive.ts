import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height }: { width: number; height: number } =
  Dimensions.get("window");

const isIOS: boolean = Platform.OS === "ios";
const isAndroid: boolean = Platform.OS === "android";
const isiPAD: boolean = height / width < 1.6;
const isTablet: boolean = height / width < 1.6;

function wp(percentage: number): number {
  const value: number = (percentage * width) / 100;
  return PixelRatio.roundToNearestPixel(value);
}

function hp(percentage: number): number {
  const value: number = (percentage * height) / 100;
  return PixelRatio.roundToNearestPixel(value);
}

const scale: number = width / 375;

function normalize(size: number): number {
  const newSize: number = size * scale;
  if (Platform.OS === "ios") {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  } else {
    if (isTablet) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  }
}

export { height, hp, isAndroid, isIOS, normalize, width, wp };
