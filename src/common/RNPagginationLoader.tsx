import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { colors, hp } from "../theme";

interface RNPagginationLoaderProps {
  size?: number | "small" | "large";
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const RNPagginationLoader: React.FC<RNPagginationLoaderProps> = ({
  size,
  color,
  style,
}) => {
  return (
    <View style={[styles.Box, style]}>
      <ActivityIndicator
        size={size || "large"}
        color={color || colors.Primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Box: {
    backgroundColor: colors.White,
    paddingVertical: hp(2),
  },
});

export default RNPagginationLoader;
