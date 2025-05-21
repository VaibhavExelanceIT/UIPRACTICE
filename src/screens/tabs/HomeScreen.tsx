/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
// import RootStack from '../../navigation/RootStack';
// import ProfileScreen from './ProfileScreen';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-gesture-handler';
// import {Screens} from '../index';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [Age, setAge] = useState(0);

  const inputRef = useRef(null);
  const isTrue = useRef(false);
  // const handlePress = () => {
  //   // Alert.alert(inputRef.current?.value); // Access the current value of the input
  // };

  useEffect(() => {
    // Access the TextInput element when the component mounts
    // console.log('858585');

    Alert.alert('Helooo inside use Effect.!!!!');
    inputRef.current?.focus();
  }, []);
  // const [count, setCount] = useState(0);
  // const [num, setNum] = useState(0);

  // // useEffect(() => {
  // //   if (num === 0) setNum(5 + Math.random() * 50);
  // // }, [num]);

  // useLayoutEffect(() => {
  //   if (num === 0) setNum(5 + Math.random() * 50);
  // }, [num]);
  // console.log('num is ', num);

  // const fetchData = useCallback(() => {
  //   console.log('Fetching Data....');
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <View style={styles.container}>
      <Button
        title="Open Drawer"
        onPress={() => navigation?.openDrawer()}></Button>

      <View style={styles.container2}>
        <TextInput ref={inputRef} value={Age} />
        <Text>
          Clicked time: {Age}-- {`${isTrue.current}`}
        </Text>
        <Button
          onPress={() => {
            setAge(a => a + 1);

            isTrue.current = !isTrue.current;
          }}
          title="add"></Button>
        {/* <Text>num : {num}</Text>
        <Button onPress={() => setNum(0)} title="Check" /> */}
        {/* <Text>Count: {count}</Text> */}

        {/* <Button onPress={() => setCount(count + 1)} title="Increment" />
        <Button onPress={() => setCount(count - 1)} title="Decrement" /> */}
      </View>
    </View>
  );
};

export default HomeScreen;

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
