import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlexPracticeScreen from '../screens/FlexPracticeScreen';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function RootStack({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="RegisterScreen">
      <Stack.Screen name="FlexScreen" component={FlexPracticeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
