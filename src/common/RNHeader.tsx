import { router } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors, fontfamily, fontsize, hp, isIOS, wp } from "../theme";
import RNStyles from "./RNStyles";
import RNText from "./RNText";

interface RNHeaderProps {
  title?: string;
  onLeftPress?: () => void;
  LeftIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  RightIcon?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const RNHeader: React.FC<RNHeaderProps> = ({
  title,
  onLeftPress,
  LeftIcon,
  onRightPress,
  RightIcon,
  containerStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.Container, containerStyle]}>
      {LeftIcon ? (
        <TouchableOpacity
          onPress={() => (onLeftPress ? onLeftPress() : router.back())}
          style={styles.Left}
        >
          <Image
            source={LeftIcon}
            resizeMode={"contain"}
            style={RNStyles.image90}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.Left} />
      )}
      <RNText style={[styles.title, titleStyle]}>{title}</RNText>
      {RightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.Right}>
          <Image
            source={RightIcon}
            resizeMode={"contain"}
            style={RNStyles.image90}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.Right} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    ...RNStyles.flexRowBetween,
    backgroundColor: colors.White,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    paddingTop: isIOS ? hp(6) : hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.Placeholder,
  },
  Left: {
    ...RNStyles.center,
    width: wp(6),
    height: wp(6),
  },
  title: {
    flex: 1,
    textAlign: "center",
    paddingHorizontal: hp(1),
    marginHorizontal: hp(1),
    fontSize: fontsize.font18,
    fontFamily: fontfamily.SemiBold,
  },
  Right: {
    ...RNStyles.center,
    width: wp(6),
    height: wp(6),
  },
});

export default RNHeader;
