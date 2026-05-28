import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface RNGradientProps {
  children?: React.ReactNode;
  colors: string[];
  style?: StyleProp<ViewStyle>;
}

const RNGradient: React.FC<RNGradientProps> = ({ children, colors, style }) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default RNGradient;
