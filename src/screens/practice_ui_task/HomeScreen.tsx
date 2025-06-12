import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';

import {RootState} from '../../store/mystore';
interface usertype {
  email: string;
  number: string;
  password: string;
  lastname: string;
  firstname: string;
  image: string;
  confirmPassword: string;
}
const HomeScreen = ({route}: any) => {
  // const [isdata, setIsdata] = useState(false);
  const [phoneNo, setPhoneNo] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userImage, setImage] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userPassword, setPassword] = useState('');
  const users: any = useSelector<RootState>(state => state.reducer.users);

  const {email} = route.params;
  function getData() {
    const res = users.filter((value: usertype) => {
      if (value.email === email) {
        console.log(value.email);
        setEmail(value.email);
        setPhoneNo(value.number);
        setLastName(value.lastname);
        setPassword(value.password);
        setImage(value.image);
        setFirstName(value.firstname);
        return value;
      }
    });
    if (res) {
      console.log(res);
    }
  }
  console.log(userImage);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <View>
          <View style={styles.componentView}>
            <Image
              style={styles.avatar}
              source={{
                uri: userImage,
              }}
            />
            <Text style={styles.textstyle}>Hello {firstName} !!!</Text>

            <Text style={styles.textstyle}>Last Name: {lastName}</Text>

            <Text style={styles.textstyle}>Phone NO: {phoneNo}</Text>

            <Text style={styles.textstyle}>Email Id: {userEmail}</Text>

            <Text style={styles.textstyle}>password: {userPassword}</Text>
          </View>
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
