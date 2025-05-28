import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';

import {
  FlexPracticeScreen,
  LoginScreen,
  ImageCropPicker,
  RegisterScreen,
  SnapCarousel,
  linearGradient,
  VisionCamera,
  RegisterValidationScreen,
  RegistrstionFormikValidation,
  RegistrationHookValidation,
} from '../screens';

const Stack = createNativeStackNavigator();

// const homeIcon = ({focused,color,size})=>{images.homeIcon ,color={'red'}, size={'12'}}

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="RegisterScreen">
      <Stack.Screen name="FlexScreen" component={FlexPracticeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ImageCropPicker" component={ImageCropPicker} />
      <Stack.Screen name="linearGradient" component={linearGradient} />
      <Stack.Screen name="snapcarousel" component={SnapCarousel} />
      <Stack.Screen name="visioncamera" component={VisionCamera} />
      <Stack.Screen
        name="registerValidation"
        component={RegisterValidationScreen}
      />
      <Stack.Screen
        name="registrationFormik"
        component={RegistrstionFormikValidation}
      />
      <Stack.Screen
        name="registrationHook"
        component={RegistrationHookValidation}
      />

      {/* <Stack.Screen name="AboutScreen" component={AboutScreen} /> */}
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WhislistScreen" component={WhislistScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="BottomBar" component={BottomTabNavigation} /> */}
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default RootStack;
