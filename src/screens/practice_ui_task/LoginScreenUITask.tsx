import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {hp, wp} from '../../helper';

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
const LoginScreenUITask = () => {
  // let email, Password;

  const password = useRef<TextInput>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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

  useEffect(() => {
    getData();
  }, []);

  function submitHandler(values: {email: string; password: string}) {
    const res = prevUser.some(value => {
      console.log(value.email === values.email);
      console.log(value.password === values.password);
      return value.email === values.email && value.password === values.password;
    });
    console.log(res);

    if (res) {
      // email = values.email;
      // Password = values.password;
      // console.log(email);
      // console.log(Password);
      navigation.navigate('HomeUiTask', {
        email: values.email,
        password: values.password,
      });
    } else {
      console.log('====>', values);
      Alert.alert('Email or Password is Wrong');
    }
  }

  return (
    <>
      <LinearGradient
        useAngle={true}
        angleCenter={{x: 0.5, y: 0.5}}
        start={{x: 0.9, y: 0.9}}
        end={{x: 0, y: 0}}
        colors={[
          '#d16ba5',
          '#c777b9',
          '#ba83ca',
          '#aa8fd8',
          '#9a9ae1',
          '#8aa7ec',
          '#79b3f4',
          '#69bff8',
          '#52cffe',
          '#41dfff',
          '#46eefa',
          '#5ffbf1',
        ]}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.LoginTextStyle}>{' Login From'}</Text>

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={values => {
                submitHandler(values);
              }}
              validator={() => ({})}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.container}>
                  <TextInput
                    placeholder="Email"
                    autoCorrect={false}
                    value={values.email}
                    returnKeyType={'next'}
                    onBlur={handleBlur('email')}
                    style={styles.inputTextStyle}
                    onChangeText={handleChange('email')}
                    onSubmitEditing={() => password.current?.focus()}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.texterrorstyle}>{errors.email}</Text>
                  )}

                  <TextInput
                    ref={password}
                    autoCorrect={false}
                    returnKeyType={'done'}
                    placeholder="Password"
                    value={values.password}
                    style={styles.inputTextStyle}
                    onBlur={handleBlur('password')}
                    onSubmitEditing={() => handleSubmit}
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.texterrorstyle}>{errors.password}</Text>
                  )}
                  <Button onPress={() => handleSubmit()} title="Submit" />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default LoginScreenUITask;

const styles = StyleSheet.create({
  texterrorstyle: {
    color: 'red',
  },
  LoginTextStyle: {
    fontSize: 30,
    marginTop: hp(20),
    color: '#69bff8',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnSubmit: {
    height: 30,
    width: '60%',
    borderRadius: 20,
    marginTop: wp(20),
    alignSelf: 'center',
    backgroundColor: '#d16ba5',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  inputTextStyle: {
    margin: 5,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    color: '#000000',
    textAlign: 'center',
    tintColor: '#000000',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    borderBlockColor: '#000000',
  },
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 30,
    paddingVertical: hp(10),
    justifyContent: 'center',
    marginHorizontal: wp(20),
    paddingHorizontal: wp(2),
    backgroundColor: '#ffffff',
  },
  linearGradient: {
    flex: 1,
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
