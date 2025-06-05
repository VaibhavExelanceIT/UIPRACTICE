// import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import mystore from './src/store/mystore';
import RootStack from './src/navigation/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={mystore}>
        <RootStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
