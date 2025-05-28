/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextInput,
  ImageSourcePropType,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';

// import {  } from 'react-native';
import {hp, wp} from '../../helper';

interface TextInputProps {
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  // textinput1?: number;
  textStyle1?: StyleProp<TextStyle>;
  subContainerStyle?: StyleProp<ViewStyle>;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  istoggleImage?: () => void;
  isShow?: boolean;
  eyeOpen?: ImageSourcePropType;
  eyeClose?: ImageSourcePropType;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  secureTextEntry?: boolean | undefined;
  enablesReturnKeyAutomatically?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number | undefined;
}

const CommonTextInput: React.FC<TextInputProps> = prop => {
  const {
    leftIcon,
    rightIcon,
    value,
    onChangeText,
    istoggleImage,
    placeholder,
    style,
    containerStyle,
    leftIconStyle,
    isShow,
    rightIconStyle,
    eyeOpen,
    eyeClose,
    autoCapitalize,
    secureTextEntry,
    enablesReturnKeyAutomatically,
    keyboardType,
    maxLength,
    ...props
  } = prop || {};

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: hp(10),
          paddingHorizontal: wp(12),
          borderRadius: 40,
          backgroundColor: '#f3f5f7',
          marginBottom: wp(10),
        },
        containerStyle,
      ]}>
      <Image style={leftIconStyle} source={leftIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.container1, style]}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
        keyboardType={keyboardType}
        maxLength={maxLength}
        {...props}
      />

      {istoggleImage ? (
        <TouchableOpacity onPress={istoggleImage}>
          {isShow ? (
            <Image style={rightIconStyle} source={eyeClose} />
          ) : (
            <Image style={rightIconStyle} source={eyeOpen} />
          )}
        </TouchableOpacity>
      ) : (
        <Image style={rightIconStyle} source={rightIcon} />
      )}
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
});
