import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { colors, hp, wp } from "../theme";

// Define a type for the style object to maintain strict typing across the app
interface RNStylesType {
  flexCenter: ViewStyle;
  flexRow: ViewStyle;
  flexRowBetween: ViewStyle;
  flexRowAround: ViewStyle;
  flexRowEvenly: ViewStyle;
  flexRowCenter: ViewStyle;
  flexWrapHorizontal: ViewStyle;
  container: ViewStyle;
  center: ViewStyle;
  width90: ViewStyle;
  image100: ImageStyle;
  image90: ImageStyle;
  image80: ImageStyle;
  image70: ImageStyle;
  image60: ImageStyle;
  image50: ImageStyle;
  shadow: ViewStyle;
  imageLoading: ViewStyle;
  icon: ImageStyle;
  devider: ViewStyle;
}

const RNStyles = StyleSheet.create<RNStylesType>({
  flexCenter: {
    flex: 1,
    backgroundColor: colors.White,
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowAround: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  flexRowEvenly: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexWrapHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  width90: {
    width: "90%",
    alignSelf: "center",
    marginVertical: hp(0.5),
  },
  image100: {
    width: "100%",
    height: "100%",
  },
  image90: {
    width: "90%",
    height: "90%",
  },
  image80: {
    width: "80%",
    height: "80%",
  },
  image70: {
    width: "70%",
    height: "70%",
  },
  image60: {
    width: "60%",
    height: "60%",
  },
  image50: {
    width: "50%",
    height: "50%",
  },
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 9,
  },
  imageLoading: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: colors.Transparent || colors.White,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: wp(5),
    height: wp(5),
  },
  devider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.Black,
  },
});

export default RNStyles;
