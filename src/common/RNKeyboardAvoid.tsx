import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";

interface RNKeyboardAvoidProps {
  children?: React.ReactNode;
  ios?: "padding" | "height" | "position";
  android?: "padding" | "height" | "position";
  offSet?: number;
  style?: StyleProp<ViewStyle>;
}

const RNKeyboardAvoid: React.FC<RNKeyboardAvoidProps> = ({
  children,
  ios,
  android,
  offSet,
  style,
}) => {
  return (
    <KeyboardAvoidingView
      style={style || {}}
      behavior={Platform.OS === "ios" ? ios || "padding" : android || "height"}
      keyboardVerticalOffset={offSet}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default RNKeyboardAvoid;
