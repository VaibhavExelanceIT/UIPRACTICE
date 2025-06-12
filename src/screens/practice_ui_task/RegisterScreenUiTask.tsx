import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {hp, images, wp} from '../../helper';
import {addUser} from '../../slice/UserSlice';
interface User {
  image: string;
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  lastname: Yup.string().required('Last Name is required').label('Name'),
  firstname: Yup.string().required('First Name is required').label('Name'),
  number: Yup.string()
    .required('Phone Number is required')
    .length(10, 'Phone Number must be 10 digit'),
  email: Yup.string()
    .label('Email')
    .required('Email is required')
    .email('Please enter valid email'),
  password: Yup.string()
    .label('Password')
    .required('Password is required')
    .matches(/\d/, 'Password must have a number')
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .min(8, ({min}) => `Password must be at least ${min} characters`),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});
const RegisterScreenUiTask = () => {
  const [uri, setUri] = useState<string>();

  const email = useRef<TextInput>(null);
  const phoneNo = useRef<TextInput>(null);
  const password = useRef<TextInput>(null);
  const lastname = useRef<TextInput>(null);
  const confirmpassword = useRef<TextInput>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function loginbtnHandler() {
    navigation.navigate('LoginUiTask');
  }
  const imageGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  };

  function submitHandler(values: User) {
    console.log('====>', values, uri);

    dispatch(
      addUser({
        firstname: values.firstname,
        lastname: values.lastname,
        number: values.number,
        email: values.email,
        password: values.password,
        image: uri,
      }),
    );
    navigation.navigate('LoginUiTask');
  }
  const color = [
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
  ];

  const dispatch = useDispatch();

  return (
    <>
      <LinearGradient
        useAngle={true}
        angleCenter={{x: 0.5, y: 0.5}}
        start={{x: 0.9, y: 0.9}}
        end={{x: 0, y: 0}}
        colors={color}
        style={styles.linearGradient}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.registrationForm}>Registartion From</Text>

            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                number: '',
                email: '',
                password: '',
                confirmPassword: '',
                image: '',
              }}
              onSubmit={values => {
                submitHandler(values);
              }}
              validationSchema={validationSchema}>
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                handleChange,
              }) => (
                <View style={styles.container}>
                  <TouchableOpacity onPress={imageGallery}>
                    <Image
                      style={styles.avatar}
                      source={uri ? {uri} : images.userIcon}
                    />
                  </TouchableOpacity>

                  <Text style={styles.profiletext}>Profile Photo</Text>

                  <TextInput
                    autoCorrect={false}
                    returnKeyType={'next'}
                    placeholder="First Name"
                    value={values.firstname}
                    style={styles.inputTextStyle}
                    placeholderTextColor={'black'}
                    onBlur={handleBlur('firstname')}
                    onChangeText={handleChange('firstname')}
                    onSubmitEditing={() => lastname.current?.focus()}
                  />
                  {errors.firstname && touched.firstname && (
                    <Text style={styles.errortext}>{errors.firstname}</Text>
                  )}
                  <TextInput
                    ref={lastname}
                    autoCorrect={false}
                    returnKeyType={'next'}
                    placeholder="Last Name"
                    value={values.lastname}
                    style={styles.inputTextStyle}
                    placeholderTextColor={'black'}
                    onBlur={handleBlur('lastname')}
                    onChangeText={handleChange('lastname')}
                    onSubmitEditing={() => phoneNo.current?.focus()}
                  />
                  {errors.lastname && touched.lastname && (
                    <Text style={styles.errortext}>{errors.lastname}</Text>
                  )}

                  <TextInput
                    ref={phoneNo}
                    autoCorrect={false}
                    value={values.number}
                    returnKeyType={'next'}
                    placeholder="Phone No"
                    onBlur={handleBlur('number')}
                    style={styles.inputTextStyle}
                    placeholderTextColor={'black'}
                    onChangeText={handleChange('number')}
                    onSubmitEditing={() => email.current?.focus()}
                  />
                  {errors.number && touched.number && (
                    <Text style={styles.errortext}>{errors.number}</Text>
                  )}

                  <TextInput
                    ref={email}
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
                    <Text style={styles.errortext}>{errors.email}</Text>
                  )}

                  <TextInput
                    ref={password}
                    autoCorrect={false}
                    placeholder="Password"
                    returnKeyType={'next'}
                    value={values.password}
                    style={styles.inputTextStyle}
                    placeholderTextColor={'black'}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    onSubmitEditing={() => confirmpassword.current?.focus()}
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errortext}>{errors.password}</Text>
                  )}

                  <TextInput
                    autoCorrect={false}
                    ref={confirmpassword}
                    returnKeyType={'done'}
                    style={styles.inputTextStyle}
                    placeholderTextColor={'black'}
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onSubmitEditing={() => handleSubmit()}
                    onBlur={handleBlur('confirmPassword')}
                    onChangeText={handleChange('confirmPassword')}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text style={styles.errortext}>
                      {errors.confirmPassword}
                    </Text>
                  )}

                  <Button
                    onPress={() => {
                      handleSubmit();
                    }}
                    title="Submit"
                  />
                  <Button
                    onPress={() => {
                      loginbtnHandler();
                    }}
                    title="Login"
                  />
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
  profiletext: {textAlign: 'center'},
  errortext: {
    color: 'red',
  },
  registrationForm: {
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
    tintColor: '#000000',
    textAlign: 'center',
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
    marginInline: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
