import React from "react";
import { ActivityIndicator, StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../theme";
import RNStyles from "./RNStyles";

interface RNImageLoaderProps {
  visible: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  size?: number | "small" | "large";
  color?: string;
}

const RNImageLoader: React.FC<RNImageLoaderProps> = ({
  visible,
  containerStyle,
  size,
  color,
}) => {
  return visible ? (
    <View style={[RNStyles.imageLoading, containerStyle]}>
      <ActivityIndicator
        size={size ?? "large"}
        color={color ?? colors.Primary}
      />
    </View>
  ) : null;
};

export default RNImageLoader;
