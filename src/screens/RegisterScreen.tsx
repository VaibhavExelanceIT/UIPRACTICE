import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Alert,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {CommonButton, CommonTextInput} from '../components';

import {fs, hp, images, wp} from '../helper';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const ToLoginScreen = () => {
    navigation.navigate('DrawerNavigation');
  };
  const SubmitBtn = () => {
    navigation.navigate('registerValidation');
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageViewStyle}>
          <Image source={images.registerImage} style={styles.imageStyle} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.title2}>Please register to Login</Text>

          <CommonTextInput
            leftIcon={images.userIcon}
            leftIconStyle={styles.logo}
            // onChangeText={(text: SetStateAction<string>) => setUserName(text)}
            value={username}
            style={styles.inputfont}
            placeholder="Enter Username"
            onChangeText={setUserName}
            containerStyle={undefined}
            isShow={false}
            eyeOpen={0}
            eyeClose={0}
            autoCapitalize={undefined}
          />
          <CommonTextInput
            leftIcon={images.phoneIcon}
            leftIconStyle={styles.logo}
            placeholder="Enter PhoneNumber"
            value={phoneno}
            style={styles.inputfont}
            onChangeText={setPhoneNo}
            keyboardType="decimal-pad"
            maxLength={10}
          />
          <CommonTextInput
            leftIcon={images.passwordIcon}
            leftIconStyle={styles.logo}
            placeholder="Enter password"
            // autoCapitalize="none"
            // autoCorrect={false}
            value={password}
            style={styles.inputfont}
            onChangeText={setPassword}
            // textContentType="newPassword"
            secureTextEntry={showPassword}
            enablesReturnKeyAutomatically
            rightIcon={images.eyeInvisibleIcon}
            rightIconStyle={styles.logo}
            istoggleImage={toggleShowPassword}
            isShow={showPassword}
            eyeOpen={images.eyeVisibleIcon}
            eyeClose={images.eyeInvisibleIcon}
          />

          <View style={styles.container2}>
            <Text style={[styles.reminderStyle]}>Reminder me next time</Text>
            <Switch
              style={[styles.switchStyle]}
              trackColor={{false: '#fffff', true: '#192f40'}}
              thumbColor={'#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <CommonButton
            btnText="Sign Up"
            // btnStyle={styles.btnBg}
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

export default RegisterScreen;

const styles = StyleSheet.create({
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
    flex: 1,
    paddingVertical: hp(15),
    paddingHorizontal: wp(15),
    backgroundColor: '#ffffff',
    // justifyContent: 'center',
    // alignItems: 'center',
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
