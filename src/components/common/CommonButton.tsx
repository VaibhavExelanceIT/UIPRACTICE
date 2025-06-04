/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {hp, wp} from '../../helper';

interface ButtonProps {
  btnText: string;
  btnStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  textStyle?: StyleProp<ViewStyle>;
}

const CommonButton: React.FC<ButtonProps> = prop => {
  const {btnText, btnStyle, onPress, textStyle} = prop || {};
  return (
    <TouchableOpacity style={[styles.btnBg, btnStyle]} onPress={onPress}>
      <Text style={textStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  btnBg: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#153043',
    paddingVertical: hp(10),
    paddingHorizontal: wp(10),
    marginBottom: hp(10),
  },
});
