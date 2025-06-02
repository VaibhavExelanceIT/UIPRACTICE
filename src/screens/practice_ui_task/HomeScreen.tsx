import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images} from '../../helper';

const HomeScreen = ({route}: any) => {
  const {firstName, lastname, phoneNo, email, password, profilepath} =
    route.params;
  console.log(
    firstName,
    '--',
    lastname,
    '--',
    phoneNo,
    '--',
    email,
    '--',
    password,
    '--',
    profilepath,
  );
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text style={styles.textstyle}>HomeScreen</Text> */}

            <Text style={styles.textstyle}>Hello {firstName} !!!</Text>

            <Text style={styles.textstyle}>Last Name: {lastname}</Text>

            <Text style={styles.textstyle}>Phone NO: {phoneNo}</Text>

            <Text style={styles.textstyle}>Email Id: {email}</Text>

            <Text style={styles.textstyle}>password: {password}</Text>
            {/* <Text>{profilepath}</Text> */}
          </View>

          <Image
            style={styles.avatar}
            source={{
              uri: 'file://' + profilepath,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
  },
  container: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#41dfff',
  },
  textData: {
    textAlign: 'center',
  },
  avatar: {
    height: 150,
    width: 150,
    marginInline: 'auto',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
