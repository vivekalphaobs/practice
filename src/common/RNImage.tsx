import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import RNStyles from "./RNStyles";

interface RNImageProps {
  source: ImageSourcePropType;
  resizeMode?: "contain" | "cover" | "stretch" | "repeat" | "center";
  style?: StyleProp<ImageStyle>;
}

const RNImage: React.FC<RNImageProps> = ({ source, resizeMode, style }) => {
  return (
    <Image
      source={source}
      resizeMode={resizeMode || "contain"}
      style={[RNStyles.image100, style]}
    />
  );
};

export default RNImage;
