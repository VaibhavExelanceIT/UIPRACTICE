import React from 'react';

import {Icon} from 'react-native-vector-icons/Icon';

export const ScreensStack = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  ProfileStack: 'ProfileStack',
  Profile: 'Profile',
  WishlistStack: 'WishlistStack',
  Whislist: 'Whislist',
  AboutStack: 'AboutStack',
  About: 'About',
};

export const routes = [
  {
    name: ScreensStack.HomeTab,
    focusedRoute: ScreensStack.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused: any) => (
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },
  {
    name: ScreensStack.HomeStack,
    focusedRoute: ScreensStack.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: (focused: any) => (
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />
    ),
  },
];
