import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors, fontfamily, fontsize, hp, wp } from "../theme";
import RNStyles from "./RNStyles";
import RNText from "./RNText";

// 1. Define the interface for the component props
interface RNButtonProps {
  title: string;
  onPress?: () => void;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

// 2. Apply the interface to the functional component
const RNButton: React.FC<RNButtonProps> = ({
  title,
  style,
  textStyle,
  onPress,
  disable,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disable}
      style={[styles.Container, style]}
    >
      <RNText style={[styles.buttonText, textStyle]}>{title}</RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.center,
    backgroundColor: colors.Primary,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    borderRadius: wp(3),
  },
  buttonText: {
    fontSize: fontsize.font18,
    fontFamily: fontfamily.Medium,
    color: colors.White,
  },
});

export default RNButton;
