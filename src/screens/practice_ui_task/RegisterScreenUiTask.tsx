// /* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {hp, images, wp} from '../../helper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import ProfileScreen from '../tabs/ProfileScreen';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('First Name is required').label('Name'),
  lastname: Yup.string().required('Last Name is required').label('Name'),
  number: Yup.string()
    .length(10, 'Phone Number must be 10 digit')
    .required('Phone Number is required'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});
const RegisterScreenUiTask = () => {
  // const [first_name, setFistName] = useState<String>('');
  // const [last_name, setLastName] = useState<String>('');
  // const [phone_no, setPhoneNo] = useState<String>('');
  // const [emailId, setEmail] = useState<String>('');
  // const [Password, setPassword] = useState<String>('');
  // const [profileimage, setProfileImage] = useState<String>('');

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [uri, setUri] = useState<string>();

  const lastname = useRef<TextInput>(null);
  const phoneNo = useRef<TextInput>(null);
  const email = useRef<TextInput>(null);
  const password = useRef<TextInput>(null);
  const confirmpassword = useRef<TextInput>(null);

  const imageGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  };

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
                firstname: '',
                lastname: '',
                number: '',
                email: '',
                password: '',
                confirmPassword: '',
                profileimage: '',
              }}
              onSubmit={values => {
                console.log('====>', values, uri);

                navigation.navigate('LoginUiTask', {
                  firstName: values.firstname,
                  lastname: values.lastname,
                  phoneNo: values.number,
                  email: values.email,
                  password: values.password,
                  profilepath: uri,
                });
              }}
              // validator={() => ({})}
              validationSchema={validationSchema}>
              {({
                handleChange,
                handleBlur,
                // handleSubmit,
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

                  <Text style={{textAlign: 'center'}}>Profile Photo</Text>

                  <TextInput
                    style={styles.inputTextStyle}
                    placeholder="First Name"
                    onChangeText={handleChange('firstname')}
                    onBlur={handleBlur('firstname')}
                    value={values.firstname}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => lastname.current?.focus()}
                  />
                  {errors.firstname && touched.firstname && (
                    <Text style={{color: 'red'}}>{errors.firstname}</Text>
                  )}
                  <TextInput
                    ref={lastname}
                    style={styles.inputTextStyle}
                    placeholder="Last Name"
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    value={values.lastname}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => phoneNo.current?.focus()}
                  />
                  {errors.lastname && touched.lastname && (
                    <Text style={{color: 'red'}}>{errors.lastname}</Text>
                  )}

                  <TextInput
                    ref={phoneNo}
                    style={styles.inputTextStyle}
                    placeholder="Phone No"
                    onChangeText={handleChange('number')}
                    onBlur={handleBlur('number')}
                    value={values.number}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => email.current?.focus()}
                  />
                  {errors.number && touched.number && (
                    <Text style={{color: 'red'}}>{errors.number}</Text>
                  )}

                  <TextInput
                    ref={email}
                    style={styles.inputTextStyle}
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => password.current?.focus()}
                  />
                  {errors.email && touched.email && (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  )}

                  <TextInput
                    ref={password}
                    style={styles.inputTextStyle}
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    onSubmitEditing={() => confirmpassword.current?.focus()}
                  />
                  {errors.password && touched.password && (
                    <Text style={{color: 'red'}}>{errors.password}</Text>
                  )}

                  <TextInput
                    ref={confirmpassword}
                    style={styles.inputTextStyle}
                    placeholder="Confirm Password"
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    autoCorrect={false}
                    returnKeyType={'done'}
                    onSubmitEditing={() => handleSubmit()}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
                  )}

                  <Button
                    onPress={() => {
                      handleSubmit();
                    }}
                    title="Submit"
                  />
                  {/* <Button
                    onPress={() => navigation.navigate('LoginUiTask')}
                    title="Login"
                  /> */}
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
