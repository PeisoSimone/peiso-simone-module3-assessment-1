import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from './screens/DashboardScreen'
import SignInScreen from './screens/SignInScreen'
import DetailsScreen from './screens/DetailsScreen'
import HomeScreen from './screens/HomeScreen'
import SplashScreen from './screens/SplashScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
