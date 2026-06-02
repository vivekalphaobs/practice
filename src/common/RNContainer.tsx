import React from "react";
import { colors } from "../theme";
import { StatusBar, StyleProp, View, ViewStyle } from "react-native";
import { useInset } from "../hooks"; // Assuming this returns { top: number, bottom: number, etc. }
import RNStyles from "./RNStyles";
import RNLoader from "./RNLoader";

interface RNContainerProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  isLoading?: boolean;
  topSafeArea?: boolean;
  bottomSafeArea?: boolean;
}

const RNContainer: React.FC<RNContainerProps> = ({
  style,
  children,
  isLoading = false,
  topSafeArea = false,
  bottomSafeArea = false,
}) => {
  const inset = useInset();

  return (
    <View
      style={[
        RNStyles.container,
        style,
        topSafeArea && { paddingTop: inset.top },
        bottomSafeArea && { paddingBottom: inset.bottom },
      ]}
    >
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={colors.Transparent}
      />
      <RNLoader visible={isLoading} />
      {children}
    </View>
  );
};

export default RNContainer;
