import React, {useMemo, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

// const funcSet = new Set();

const WhislistScreen = () => {
  const navigation = useNavigation();
  const [num, setNum] = useState(Number);
  const squaredNum = useMemo(() => squareNum(num), [num]);
  const [count, setCount] = useState(0);
  const onChangeHandler = (e: {
    target: {value: React.SetStateAction<number>};
  }) => {
    setNum(e.target.value);
  };
  const counterHandler = () => {
    setCount(count + 1);
  };

  function squareNum(number: number) {
    console.log('Squaring will be done!');
    return Math.pow(number, 2);
  }
  return (
    <View style={styles.container}>
      <Button title="Open Drawer" onPress={() => navigation?.openDrawer()} />

      <View style={styles.container2}>
        <TextInput
          keyboardType="decimal-pad"
          placeholder="Enter the number"
          value={num.toString()}
          onChange={onChangeHandler}
        />
        <Text>OUTPUT: {squaredNum}</Text>
        <Button onPress={counterHandler} title="counter++"></Button>
        <Text>OUTPUT: {count}</Text>
      </View>
    </View>
  );
};

export default WhislistScreen;

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
