import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../theme";
import RNLoader from "./RNLoader";

interface RNContainerProps {
  backgroundColor?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  barStyle?: StatusBarStyle;
  translucent?: boolean;
}

const RNContainer: React.FC<RNContainerProps> = ({
  backgroundColor,
  isLoading,
  children,
  style,
  barStyle,
  translucent,
}) => {
  const styles: StyleProp<ViewStyle> = [
    { flex: 1, backgroundColor: backgroundColor },
    style,
  ];

  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: backgroundColor || colors.White }]}
    >
      {isLoading && <RNLoader visible={isLoading} />}
      <View style={styles}>
        <StatusBar
          barStyle={barStyle ?? "light-content"}
          // backgroundColor={colors.Transparent}
          // translucent={translucent ?? true}
        />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default RNContainer;
