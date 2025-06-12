import React, {useRef} from 'react';
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
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {hp, wp} from '../../helper';
import {RootState} from '../../store/mystore';

const LoginScreenUITask = () => {
  const password = useRef<TextInput>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const users: any = useSelector<RootState>(state => state.reducer.users);

  const submitHandler = (values: {email: string; password: string}) => {
    const arr = user.some(item => {
      if (item.email == values.email && item.password == values.password) {
        return true;
      } else {
        return false;
      }
    });

    if (arr) {
      navigation.navigate('HomeUiTask', {
        email: values.email,
        password: values.password,
      });
    } else {
      Alert.alert('Email or Password is Wrong');
    }
  };

  // console.log(users);
  const user = [...users];
  console.log(user);
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
            <Text style={styles.registrationTest}>{'Registartion From'}</Text>

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
                    placeholderTextColor={'black'}
                    onChangeText={handleChange('email')}
                    onSubmitEditing={() => password.current?.focus()}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <TextInput
                    ref={password}
                    autoCorrect={false}
                    placeholder="Password"
                    returnKeyType={'done'}
                    value={values.password}
                    style={styles.inputTextStyle}
                    placeholderTextColor={'black'}
                    onBlur={handleBlur('password')}
                    onSubmitEditing={() => handleSubmit}
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
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
  errorText: {
    color: 'red',
  },
  registrationTest: {
    fontSize: 30,
    color: '#69bff8',
    marginTop: hp(20),
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
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  inputTextStyle: {
    margin: 5,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    color: '#000000',
    borderRadius: 20,
    textAlign: 'center',
    alignItems: 'center',
    tintColor: '#000000',
    backgroundColor: '#FAF9F6',
    borderBlockColor: '#000000',
  },
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 30,
    paddingVertical: hp(10),
    marginHorizontal: wp(20),
    paddingHorizontal: wp(2),
    justifyContent: 'center',
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
