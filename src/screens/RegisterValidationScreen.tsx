/* eslint-disable react-hooks/exhaustive-deps */
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CommonButton, CommonTextInput} from '../components';
import {fs, hp, images, wp} from '../helper';
import {useNavigation} from '@react-navigation/native';

const RegisterValidationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setConfirmShowPassword] = useState(true);
  const [confirmpassword, setConfirmPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);
  const [error, setError] = useState(false);
  const [phoneError, setPhoneNoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [consfirmPswdError, setConfirmPswdError] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };
  const ToLoginScreen = () => {
    navigation.navigate('registrationFormik');
  };
  const SubmitBtn = () => {
    navigation.navigate('registrationHook');
  };

  const usernameValidation = (e: string) => {
    const regex = /^[a-zA-Z]{2,20}$/;
    if (!regex.test(e)) {
      setError(true);
    } else {
      setError(false);
    }

    setUserName(e);
  };

  const phoneValidation = (e: string) => {
    const regex = /^[0-9]{10}/;
    if (regex.test(e)) {
      setPhoneNoError(false);
    } else {
      setPhoneNoError(true);
    }
    setPhoneNo(e);
  };

  const errorValidation = (e: string) => {
    if (!/\S+@\S+\.\S+/.test(e)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    setEmail(e);
  };

  const passwordValidation = (e: string) => {
    const regex = /^\S*$/;

    console.log(regex.test(e));

    if (regex.test(e) && e.length >= 6 && e.length <= 15) {
      console.log('This is right');
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    console.log(typeof e.trim());
    setPassword(e);
  };

  const confirmPasswordValidation = (e: string) => {
    if (!(password === e)) {
      setConfirmPswdError(true);
    } else {
      setConfirmPswdError(false);
    }

    setConfirmPassword(e);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.title2}>Please register to Login</Text>

          <CommonTextInput
            leftIcon={images.userIcon}
            leftIconStyle={styles.logo}
            value={username}
            style={styles.inputfont}
            placeholder="Enter Username"
            onChangeText={e => usernameValidation(e)}
            containerStyle={undefined}
            isShow={false}
            autoCapitalize={undefined}
          />

          {error && (
            <Text style={[styles.validationStyle]}>
              {' Enter the UserName !!!! \n Username Should be between 2-20'}
            </Text>
          )}
          <CommonTextInput
            leftIcon={images.phoneIcon}
            leftIconStyle={styles.logo}
            placeholder="Enter PhoneNumber"
            value={phoneno}
            style={styles.inputfont}
            onChangeText={e => phoneValidation(e)}
            keyboardType="decimal-pad"
            maxLength={10}
          />

          {phoneError && (
            <Text style={[styles.validationStyle]}>
              {' Enter the phoneNo !!!! \n Phone no Should be of 10 digit'}
            </Text>
          )}

          <CommonTextInput
            leftIcon={images.mail}
            leftIconStyle={styles.logo}
            placeholder="Enter Email Id"
            value={email}
            style={styles.inputfont}
            onChangeText={e => errorValidation(e)}
            keyboardType="email-address"
          />
          {emailError && (
            <Text style={[styles.validationStyle]}>
              {' Enter the Emailid properly !!!! '}
            </Text>
          )}

          <CommonTextInput
            leftIcon={images.passwordIcon}
            leftIconStyle={styles.logo}
            placeholder="Enter password"
            value={password}
            style={styles.inputfont}
            onChangeText={e => passwordValidation(e)}
            secureTextEntry={showPassword}
            rightIcon={images.eyeInvisibleIcon}
            rightIconStyle={styles.logo}
            istoggleImage={toggleShowPassword}
            isShow={showPassword}
            eyeOpen={images.eyeVisibleIcon}
            eyeClose={images.eyeInvisibleIcon}
          />

          {passwordError && (
            <Text style={[styles.validationStyle]}>
              {
                ' Enter the Password !!!! \n Passsword length Between 6-15 \n Password contain Capital and Small Letter '
              }
            </Text>
          )}
          <CommonTextInput
            leftIcon={images.passwordIcon}
            leftIconStyle={styles.logo}
            placeholder="Enter confirm password"
            value={confirmpassword}
            style={styles.inputfont}
            onChangeText={e => confirmPasswordValidation(e)}
            secureTextEntry={showConfirmPassword}
            rightIcon={images.eyeInvisibleIcon}
            rightIconStyle={styles.logo}
            istoggleImage={toggleConfirmPassword}
            isShow={showConfirmPassword}
            eyeOpen={images.eyeVisibleIcon}
            eyeClose={images.eyeInvisibleIcon}
          />

          {consfirmPswdError && (
            <Text style={[styles.validationStyle]}>
              {
                ' Enter the confirm Password !!!! \n Password and confirm password should match '
              }
            </Text>
          )}

          <View style={styles.container2}>
            <Text style={[styles.reminderStyle]}>Reminder me next time</Text>
            <Switch
              style={[styles.switchStyle]}
              trackColor={{false: '#fffff', true: '#192f40'}}
              thumbColor={'#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <CommonButton
            btnText="Sign Up"
            onPress={SubmitBtn}
            textStyle={styles.submitTitle}
            btnStyle={undefined}
          />

          <View style={styles.container2}>
            <Text style={[styles.title4]}>Already have account?</Text>
            <TouchableOpacity onPress={ToLoginScreen}>
              <Text style={styles.signUp}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterValidationScreen;

const styles = StyleSheet.create({
  validationStyle: {
    color: 'red',
    fontSize: 15,
  },
  signinstyle: {
    fontSize: 13,
    alignSelf: 'center',
    color: '#39444d',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  imageViewStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: hp(15),
    paddingHorizontal: wp(15),
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 50,
    alignSelf: 'flex-start',
    color: '#0c1c20',
    fontWeight: '600',
  },
  title2: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: '#0c1c20',
    fontWeight: '500',
    marginBottom: hp(20),
  },
  logo: {
    height: hp(20),
    width: wp(20),
    marginEnd: wp(12),
    resizeMode: 'contain',
  },
  inputfont: {
    flexDirection: 'column',
    flex: 1,
    fontWeight: 'bold',
    color: '#48535c',
    fontSize: fs(14),
  },
  container2: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(12),
  },
  title3: {
    fontSize: 13,
    alignSelf: 'center',
    color: '#0c1c20',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  title4: {
    fontSize: 13,
    alignSelf: 'center',
    color: '#b9bec1',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  signUp: {
    fontSize: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#39444d',
  },
  switchStyle: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
    fontSize: 13,
    alignSelf: 'center',
    color: '#0c1c20',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  reminderStyle: {
    fontSize: 13,
    alignSelf: 'center',
    color: '#0c1c20',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
  submitTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
});
