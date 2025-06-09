import React from 'react';
import {StyleSheet, Button, TextInput, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';

const HomeScreen2 = ({route}) => {
  const name = route.params?.Text;
  const navigation = useNavigation();
  let [text, onChangeText] = React.useState(name);
  console.log(name);

  React.useEffect(() => {
    if (name) {
      onChangeText(name);
    }
  }, [name]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
        placeholderTextColor="black"
      />

      <Button
        color="blue"
        title="Submit"
        onPress={() => navigation.navigate('DsiplayData', {Text: text})}
        // onPress={() => Alert.alert(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: '8%',
    width: '80%',
    borderWidth: 1,
    padding: 12,
  },
});

export default HomeScreen2;
