import React, {useEffect, useRef, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';

const AboutScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');

  useEffect(() => {
    Alert.alert('inside the about Screen');
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TextInput
          keyboardType="ascii-capable"
          value={inputValue}
          onPress={e => setInputValue(e.target?.measure)}
          placeholder="Enter the number"
        />
        <Text> Current Value: {inputValue}</Text>
        <Text>Previous Value: {previousInputValue.current}</Text>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  btnStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
