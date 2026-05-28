import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native";
import { colors, fontfamily, fontsize, hp, wp } from "../theme";

interface RNInputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
}

const RNInput = React.forwardRef<TextInput, RNInputProps>((props, ref) => {
  const {
    placeholder,
    placeholderTextColor,
    style,
    onChangeText,
    onSubmitEditing,
    onEndEditing,
    onFocus,
    onBlur,
    keyboardType,
    returnKeyType,
    secureTextEntry,
    value,
    textAlign,
    maxLength,
    onChange,
    onKeyPress,
    editable,
    multiline,
    numberOfLines,
    spellCheck,
  } = props;

  return (
    <TextInput
      ref={ref}
      editable={editable}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor ?? colors.Placeholder}
      style={[styles.input, style]}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onEndEditing={onEndEditing}
      onFocus={onFocus}
      onBlur={onBlur}
      keyboardType={keyboardType || "default"}
      returnKeyType={returnKeyType || "next"}
      secureTextEntry={secureTextEntry || false}
      value={value}
      textAlign={textAlign || "left"}
      textAlignVertical={"center"}
      autoCorrect={false}
      spellCheck={spellCheck ?? true}
      autoCapitalize={"none"}
      maxLength={maxLength}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    marginVertical: hp(1),
    fontSize: fontsize.font16,
    fontFamily: fontfamily.Regular,
    color: colors.Black,
  },
});

export default RNInput;
