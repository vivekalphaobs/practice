import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../theme";
import RNStyles from "./RNStyles";

interface RNLoaderProps {
  visible: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number | "small" | "large";
}

const RNLoader: React.FC<RNLoaderProps> = ({ visible, style, color, size }) => {
  return visible ? (
    <View style={[styles.Container, style]}>
      <ActivityIndicator
        size={size ?? "large"}
        color={color || colors.Primary}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.center,
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.Black + "60",
    zIndex: 10000,
  },
});

export default RNLoader;
