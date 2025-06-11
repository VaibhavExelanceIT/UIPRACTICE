import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
interface usertype {
  email: string;
  number: string;
  password: string;
  lastname: string;
  firstname: string;
  profileimage: string;
  confirmPassword: string;
}
let prevUser: usertype[];
const HomeScreen = ({route}: any) => {
  const [isdata, setIsdata] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userImage, setImage] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userPassword, setPassword] = useState('');

  const {email} = route.params;
  console.log(route.params);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('users');
      if (jsonValue !== null) {
        prevUser = JSON.parse(jsonValue);
        console.log('prev users', prevUser);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  const getUserData = () => {
    const res = prevUser.filter(value => {
      if (value.email === email) {
        console.log(value.email);
        setEmail(value.email);
        setPhoneNo(value.number);
        setLastName(value.lastname);
        setPassword(value.password);
        setImage(value.profileimage);
        setFirstName(value.firstname);
        return value;
      }
    });
    if (res) {
      setIsdata(true);
      console.log(res);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        {isdata && (
          <View>
            <View style={styles.componentView}>
              <Image
                style={styles.avatar}
                source={{
                  uri: 'file://' + userImage,
                }}
              />
              <Text style={styles.textstyle}>Hello {firstName} !!!</Text>

              <Text style={styles.textstyle}>Last Name: {lastName}</Text>

              <Text style={styles.textstyle}>Phone NO: {phoneNo}</Text>

              <Text style={styles.textstyle}>Email Id: {userEmail}</Text>

              <Text style={styles.textstyle}>password: {userPassword}</Text>
            </View>
          </View>
        )}
        <View style={styles.stylebtn}>
          <Button onPress={getUserData} title="Fetch data" />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  stylebtn: {
    margin: 20,
  },
  componentView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#41dfff',
  },
  textData: {
    textAlign: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignItems: 'center',
    marginInline: 'auto',
    justifyContent: 'center',
  },
});
