import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../screens';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

// const homeIcon = ({focused,color,size})=>{images.homeIcon ,color={'red'}, size={'12'}}

function RootStack({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="RegisterScreen">
      <Stack.Screen name="FlexScreen" component={Screens.FlexPracticeScreen} />
      <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={Screens.RegisterScreen} />
      <Stack.Screen
        name="ImageCropPicker"
        component={Screens.ImageCropPicker}
      />
      <Stack.Screen name="linearGradient" component={Screens.linearGradient} />

      {/* <Stack.Screen name="AboutScreen" component={Screens.AboutScreen} /> */}
      {/* <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      <Stack.Screen name="WhislistScreen" component={Screens.WhislistScreen} />
      <Stack.Screen name="ProfileScreen" component={Screens.ProfileScreen} /> */}
      {/* <Stack.Screen name="BottomBar" component={BottomTabNavigation} /> */}
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default RootStack;
