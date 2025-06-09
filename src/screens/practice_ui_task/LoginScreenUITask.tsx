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

import {useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import {hp, wp} from '../../helper';

const LoginScreenUITask = () => {
  const password2 = useRef<TextInput>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const items: any = useSelector(state => state);
  const user = items.users;
  console.log('items', items);
  // console.log('[...users]', [...user]);

  function myPromise(value: {email: string; password2: string}) {
    return new Promise((resolve, reject) => {
      user.some((item: {email: string; password: string}) => {
        if (item.email === value.email && item.password === value.password2) {
          console.log('Resolve.........');
          setTimeout(() => {
            resolve(navigation.navigate('HomeUiTask', {email: value.email}));
          }, 2000);
        } else {
          console.log('Reject.........');
          setTimeout(() => {
            reject(Alert.alert('Email or Password is Wrong'));
          }, 2000);
        }
      });
    });
  }

  return (
    // <View style={styles.mainContainer}>
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
              onSubmit={values => {
                myPromise(values);
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
                    style={styles.inputTextStyle}
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => password2.current?.focus()}
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
                  />
                  {errors.password2 && touched.password2 && (
                    <Text style={{color: 'red'}}>{errors.password2}</Text>
                  )}

                  <Button onPress={() => handleSubmit()} title="Submit" />
                  {/* <Button
                    onPress={() => navigation.navigate('registrationFormik')}
                    title="Submit"
                  /> */}
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
    // </View>
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
    // flex: 1,
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
    // backgroundColor: 'rgba(4, 67, 240, 0.4)',
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
