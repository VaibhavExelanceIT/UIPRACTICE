import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {hp, images, wp} from '../../helper';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  number: Yup.string()
    .length(10, 'Phone Number must be 10 digit')
    .required('Phone Number is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
  lastname: Yup.string().required('Last Name is required').label('Name'),
  firstname: Yup.string().required('First Name is required').label('Name'),
});

interface usertype {
  email: string;
  number: string;
  password: string;
  lastname: string;
  firstname: string;
  profileimage: string;
  confirmPassword: string;
}
let prevUser: any;
let data: usertype[];
const RegisterScreenUiTask = () => {
  const [reuse, setResue] = useState(false);
  const [uri, setUri] = useState<string>('');

  const email = useRef<TextInput>(null);
  const phoneNo = useRef<TextInput>(null);
  const password = useRef<TextInput>(null);
  const lastname = useRef<TextInput>(null);
  const confirmpassword = useRef<TextInput>(null);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const imageGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  };

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
    setResue(false);
  }, [reuse]);

  const storeData = async (value: usertype, image: string) => {
    try {
      value.profileimage = image;
      if (prevUser === undefined) {
        data = [value];
      } else {
        data = [...prevUser, value];
      }
      console.log('data=>>', data);
      console.log('values=>>', value);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('users', jsonValue);
      setResue(true);
    } catch (e) {
      Alert.alert('Error ' + e);
    }
  };

  function submitHandler(values: usertype) {
    storeData(values, uri);
    navigation.navigate('LoginUiTask');
  }

  function loginbtnhandler() {
    navigation.navigate('LoginUiTask');
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
            <Text style={styles.registrationText}>{'Registartion From'}</Text>

            <Formik
              initialValues={{
                email: '',
                number: '',
                lastname: '',
                password: '',
                firstname: '',
                profileimage: uri,
                confirmPassword: '',
              }}
              onSubmit={values => {
                submitHandler(values);
              }}
              validationSchema={validationSchema}>
              {({
                handleChange,
                handleBlur,

                values,
                errors,
                touched,
                handleSubmit,
              }) => (
                <View style={styles.container}>
                  <TouchableOpacity onPress={imageGallery}>
                    <Image
                      style={styles.avatar}
                      source={uri ? {uri} : images.userIcon}
                    />
                  </TouchableOpacity>

                  <Text style={styles.profilephotostyle}>
                    {'Profile Photo'}
                  </Text>

                  <TextInput
                    autoCorrect={false}
                    returnKeyType={'next'}
                    value={values.firstname}
                    placeholder="First Name"
                    style={styles.inputTextStyle}
                    onBlur={handleBlur('firstname')}
                    onChangeText={handleChange('firstname')}
                    onSubmitEditing={() => lastname.current?.focus()}
                  />
                  {errors.firstname && touched.firstname && (
                    <Text style={styles.errorTextStyle}>
                      {errors.firstname}
                    </Text>
                  )}
                  <TextInput
                    ref={lastname}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    value={values.lastname}
                    placeholder="Last Name"
                    style={styles.inputTextStyle}
                    onBlur={handleBlur('lastname')}
                    onChangeText={handleChange('lastname')}
                    onSubmitEditing={() => phoneNo.current?.focus()}
                  />
                  {errors.lastname && touched.lastname && (
                    <Text style={styles.errorTextStyle}>{errors.lastname}</Text>
                  )}

                  <TextInput
                    ref={phoneNo}
                    autoCorrect={false}
                    value={values.number}
                    placeholder="Phone No"
                    returnKeyType={'next'}
                    onBlur={handleBlur('number')}
                    style={styles.inputTextStyle}
                    onChangeText={handleChange('number')}
                    onSubmitEditing={() => email.current?.focus()}
                  />
                  {errors.number && touched.number && (
                    <Text style={styles.errorTextStyle}>{errors.number}</Text>
                  )}

                  <TextInput
                    ref={email}
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
                    <Text style={styles.errorTextStyle}>{errors.email}</Text>
                  )}

                  <TextInput
                    ref={password}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    placeholder="Password"
                    value={values.password}
                    style={styles.inputTextStyle}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    onSubmitEditing={() => confirmpassword.current?.focus()}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorTextStyle}>{errors.password}</Text>
                  )}

                  <TextInput
                    autoCorrect={false}
                    ref={confirmpassword}
                    returnKeyType={'done'}
                    style={styles.inputTextStyle}
                    value={values.confirmPassword}
                    placeholder="Confirm Password"
                    onBlur={handleBlur('confirmPassword')}
                    onSubmitEditing={() => handleSubmit()}
                    onChangeText={handleChange('confirmPassword')}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styles.errorTextStyle}>
                      {errors.confirmPassword}
                    </Text>
                  )}

                  <View style={styles.submitbtn}>
                    <Button
                      onPress={() => {
                        handleSubmit();
                      }}
                      title="Submit"
                    />
                  </View>
                  <View style={styles.loginbtn}>
                    <Button
                      onPress={() => {
                        loginbtnhandler();
                      }}
                      title="Login"
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default RegisterScreenUiTask;

const styles = StyleSheet.create({
  submitbtn: {marginVertical: 10},
  loginbtn: {
    marginTop: 10,
  },
  errorTextStyle: {
    color: 'red',
  },
  profilephotostyle: {
    textAlign: 'center',
  },
  registrationText: {
    fontSize: 30,
    color: '#69bff8',
    marginTop: hp(20),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnSubmit: {
    width: '60%',
    height: 30,
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
    // flex: 1,
    padding: 10,
    margin: 5,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    color: '#000000',
    textAlign: 'center',
    alignItems: 'center',
    tintColor: '#000000',
    backgroundColor: '#FAF9F6',
    borderBlockColor: '#000000',
  },
  container: {
    flex: 1,
    marginTop: 20,
    borderRadius: 30,
    marginBottom: 40,
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
