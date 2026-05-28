import React from "react";
import {
  TextStyle as RNTextStyle,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
} from "react-native";
import { colors, fontfamily, fontsize } from "../theme";

interface RNTextProps extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numOfLines?: number;
  size?: number;
  family?: string;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  align?: "auto" | "left" | "right" | "center" | "justify";
  color?: string;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHorizontal?: number;
  pVertical?: number;
  spacing?: number;
  onPress?: () => void;
}

const RNText: React.FC<RNTextProps> = ({
  children,
  style,
  numOfLines,
  size,
  family,
  weight,
  align,
  color,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHorizontal,
  pVertical,
  spacing,
  onPress,
  ...restProps
}) => {
  const TextStyles: RNTextStyle = {
    color: color ?? colors.Black,
    fontSize: size ?? fontsize.font16,
    fontFamily: family ?? fontfamily.Regular,
    textAlign: align ?? "left",
    fontWeight: weight,
    paddingTop: pTop,
    paddingLeft: pLeft,
    paddingRight: pRight,
    paddingBottom: pBottom,
    paddingHorizontal: pHorizontal,
    paddingVertical: pVertical,
    letterSpacing: spacing,
  };

  return (
    <Text
      onPress={onPress}
      numberOfLines={numOfLines}
      style={[TextStyles, style]}
      {...restProps}
    >
      {children}
    </Text>
  );
};

export default RNText;
