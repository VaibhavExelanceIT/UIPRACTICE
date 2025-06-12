import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {persistor, mystore} from './src/store/mystore';
import RootStack from './src/navigation/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={mystore}>
        <PersistGate persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
