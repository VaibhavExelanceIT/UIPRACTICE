/* eslint-disable react/no-unstable-nested-components */
import {Easing, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../screens';
import {images} from '../helper';
// import {Image} from 'react-native-reanimated/lib/typescript/Animated';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{animation: 'fade', headerShown: false}}>
      <Tab.Screen
        name={'HomeScreen'}
        // getComponent={ProfileScreenWithDrawer}
        component={Screens.HomeScreen}
        options={{
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 200,
              easing: Easing.inOut(Easing.ease),
            },
          },

          tabBarActiveTintColor: 'red',
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image source={images.homeIcon} style={styles.ImageStyle} />
          ),
        }}
      />
      <Tab.Screen
        name={'WhislistScreen'}
        component={Screens.WhislistScreen}
        options={{
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 200,
              easing: Easing.inOut(Easing.ease),
            },
          },

          // tabBarBadge: 1,

          tabBarActiveTintColor: 'red',
          tabBarIcon: ({}) => (
            <Image source={images.whislistIcon} style={styles.ImageStyle} />
          ),
        }}
      />
      <Tab.Screen
        name={'ProfileScreen'}
        component={Screens.ProfileScreen}
        options={{
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 200,
              easing: Easing.inOut(Easing.ease),
            },
          },

          tabBarActiveTintColor: 'red',

          tabBarIcon: ({}) => (
            <Image source={images.userIcon} style={styles.ImageStyle} />
          ),
        }}
      />
      <Tab.Screen
        name={'AboutScreen'}
        component={Screens.AboutScreen}
        options={{
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 200,
              easing: Easing.inOut(Easing.ease),
            },
          },
          tabBarActiveTintColor: 'red',

          tabBarIcon: ({}) => (
            <Image source={images.AboutIcon} style={styles.ImageStyle} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  ImageStyle: {height: 30, width: 30},
});
