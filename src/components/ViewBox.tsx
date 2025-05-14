import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface ViewBoxProps {
  text1?: number;
  text2?: number;
  text3?: number;
  text4?: number;
  textStyle1?: StyleProp<TextStyle>;
  textStyle2?: StyleProp<TextStyle>;
  textStyle3?: StyleProp<TextStyle>;
  textStyle4?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  subContainerStyle?: StyleProp<ViewStyle>;
}

const ViewBox: React.FC<ViewBoxProps> = props => {
  const {
    text1,
    text2,
    text3,
    text4,
    textStyle1,
    textStyle2,
    textStyle3,
    textStyle4,
    containerStyle,
  } = props || {};

  return (
    <View style={[styles?.container1, containerStyle]}>
      <Text style={textStyle1}>{text1}</Text>
      <View style={styles.subContainerStyle}>
        {text2 && <Text style={textStyle2}>{text2}</Text>}
        {text4 && <Text style={textStyle4}>{text4}</Text>}
      </View>
      {text3 && <Text style={textStyle3}>{text3}</Text>}
    </View>
  );
};

export default ViewBox;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  subContainerStyle: {
    justifyContent: 'space-between',
  },
});
