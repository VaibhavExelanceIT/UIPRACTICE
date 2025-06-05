/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// import * as Yup from 'yup';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {hp, wp} from '../../helper';
import {RootState} from '../../store/mystore';

const LoginScreenUITask = () => {
  const password2 = useRef<TextInput>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const users: any = useSelector<RootState>(state => state.users);

  // console.log(typeof users);
  const user = [...users];

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
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: hp(20),
                fontSize: 30,
                color: '#69bff8',
              }}>
              Registartion From
            </Text>

            <Formik
              initialValues={{
                email: '',
                password2: '',
              }}
              onSubmit={
                values => {
                  const arr = user.some(item => {
                    if (
                      item.email == values.email &&
                      item.password == values.password2
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  });

                  if (arr) {
                    navigation.navigate('HomeUiTask');
                  } else {
                    Alert.alert('Email or Password is Wrong');
                    console.log(
                      'email && PAssword',
                      user[0].email,
                      user[0].password,
                    );
                  }
                }

                // let i = 0;
                // while (i < user.length) {
                //   if (
                //     user[i].email == values.email &&
                //     user[i].password == values.password2
                //   ) {
                //     navigation.navigate('HomeUiTask');
                //   } else {
                //     Alert.alert('Email or Password is Wrong');
                //     console.log(
                //       'email && PAssword',
                //       user[0].email,
                //       user[0].password,
                //     );
                //     console.log(user[0].email === values.email);
                //     console.log(user[0].password === values.password2);
                //   }
                //   i++;
              }
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
                    style={styles.inputTextStyle}
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => password2.current?.focus()}
                    placeholderTextColor={'black'}
                  />
                  {errors.email && touched.email && (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  )}

                  <TextInput
                    ref={password2}
                    style={styles.inputTextStyle}
                    placeholder="Password"
                    onChangeText={handleChange('password2')}
                    onBlur={handleBlur('password2')}
                    value={values.password2}
                    autoCorrect={false}
                    returnKeyType={'done'}
                    onSubmitEditing={() => handleSubmit}
                    placeholderTextColor={'black'}
                  />
                  {errors.password2 && touched.password2 && (
                    <Text style={{color: 'red'}}>{errors.password2}</Text>
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
  btnSubmit: {
    marginTop: wp(20),
    width: '60%',
    height: 30,
    alignSelf: 'center',
    backgroundColor: '#d16ba5',
    borderRadius: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  inputTextStyle: {
    color: '#000000',
    tintColor: '#000000',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FAF9F6',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    margin: 5,
    borderBlockColor: '#000000',
  },
  container: {
    marginBottom: 40,
    paddingHorizontal: wp(2),
    paddingVertical: hp(10),
    marginHorizontal: wp(20),
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 20,
    flex: 1,

    backgroundColor: '#ffffff',
  },
  linearGradient: {
    flex: 1,
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
