import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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

  // const decCnt = () => setCount(count - 1);
  // const incCnt = () => setCount(count + 1);
  // const incNum = () => setNum(num + 1);

  // funcSet.add(incCnt);
  // funcSet.add(decCnt);
  // funcSet.add(incNum);

  // const prevCountRef = useRef();

  // useEffect(() => {
  //   prevCountRef.current = count;
  // }, [count]);
  function squareNum(number: number) {
    console.log('Squaring will be done!');
    return Math.pow(number, 2);
  }
  return (
    <View style={styles.container}>
      <Button title="Open Drawer" onPress={() => navigation?.openDrawer()} />

      <View style={styles.container2}>
        {/* <Text>Current count: {count}</Text>
        <Text>Previous count: {prevCountRef.current}</Text>
        <Button onPress={() => setCount(count + 1)} title="Increment"></Button> */}

        {/* <Text>Without useCallback Hook</Text> */}
        {/* <Text>{funcSet.size}</Text> */}
        {/* <Button onPress={incCnt} title="Increase Counter" />
        <Button onPress={decCnt} title="Decrease Counter" />
        <Button onPress={incNum} title="Increase Number" /> */}

        <TextInput
          keyboardType="decimal-pad"
          placeholder="Enter the number"
          value={num}
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
