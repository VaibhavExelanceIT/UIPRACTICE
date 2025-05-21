import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current?.focus();
  };
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <View style={styles.container}>
      <Button
        title="Open Drawer"
        // touchSoundDisabled
        onPress={() => navigation?.openDrawer()}
      />

      <View style={styles.container2}>
        <TextInput
          keyboardType="ascii-capable"
          ref={inputElement}
          value={inputValue}
          onChange={e => setInputValue(e.target?.value)}
          placeholder="Enter the data"
          keyboardAppearance="dark"
          // focusable
        />
        <Text>Render Count: {count.current}</Text>
        <Button onPress={focusInput} title="Input focus" />
      </View>
    </View>
  );
};

export default ProfileScreen;

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
