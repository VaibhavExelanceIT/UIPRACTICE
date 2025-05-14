/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

// import {TextInput} from '../components/common/TextInput';

import {useNavigation} from '@react-navigation/native';
import {fs, hp, images, wp} from '../helper';
import {CommonButton, CommonTextInput} from '../components';

// import RootStack from '../navigation/RootStack';
// import CommonTextInput from '../components/common/CommonTextInput';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [showPassword, setShowPassword] = React.useState(true);
  const [isEnabled, setIsEnabled] = React.useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const ToRegisterScreen = () => {
    navigation.popTo('RegisterScreen');
  };
  const SubmitBtn = () => {
    Alert.alert('Submited ');
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageViewStyle}>
          <Image source={images.loginImage} style={styles.imageStyle} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.title2}>please sign in to continue</Text>

          <CommonTextInput
            leftIcon={images.userIcon}
            leftIconStyle={styles.logo}
            // onChangeText={(text: React.SetStateAction<string>) => setUserName(text)}
            value={username}
            style={styles.inputfont}
            placeholder="Enter Username"
            onChangeText={text => setUserName(text)}
            containerStyle={undefined}
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
            enablesReturnKeyAutomatically={true}
            rightIcon={images.eyeInvisibleIcon}
            rightIconStyle={styles.logo}
            istoggleImage={toggleShowPassword}
            isShow={showPassword}
            eyeOpen={images.eyeVisibleIcon}
            eyeClose={images.eyeInvisibleIcon}
          />

          <View style={styles.container2}>
            <Text style={[styles.title4]}>Reminder me next time</Text>
            <Switch
              style={styles.switchStyle}
              trackColor={{false: '#fffff', true: '#192f40'}}
              thumbColor={'#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <CommonButton
            btnText="Sign In"
            // btnStyle={styles.btnBg}
            onPress={SubmitBtn}
            textStyle={styles.submitTitle}
            btnStyle={undefined}
          />

          <View style={styles.container2}>
            <Text style={[styles.accountcolor]}>Don't have account?</Text>
            <TouchableOpacity onPress={ToRegisterScreen}>
              <Text style={[styles.signup]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  signup: {
    fontSize: 13,
    alignSelf: 'center',

    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#39444d',
  },
  accountcolor: {
    fontSize: 13,
    alignSelf: 'center',

    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#b9bec1',
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
  container2: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(12),
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
    color: '#0c1c20',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
  switchStyle: {
    fontSize: 13,
    alignSelf: 'center',
    color: '#0c1c20',
    justifyContent: 'center',
    fontWeight: 'bold',
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
  input: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(10),
    paddingHorizontal: wp(12),
    borderRadius: 40,
    backgroundColor: '#f3f5f7',
    marginBottom: wp(10),
    fontWeight: 'bold',
    color: '#48535c',
  },
  inputfont: {
    flexDirection: 'column',
    flex: 1,
    fontWeight: 'bold',
    color: '#48535c',
    fontSize: fs(14),
  },
  logo: {
    height: hp(20),
    width: wp(20),
    marginEnd: wp(12),
    resizeMode: 'contain',
  },
  btnBg: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#153043',
    paddingVertical: hp(10),
    paddingHorizontal: wp(10),
    marginBottom: hp(10),
  },
  submitTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
});
