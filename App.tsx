// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './src/navigation/RootStack';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
