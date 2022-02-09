import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';

const Stack = createStackNavigator();
const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName="Home"
          headerMode="screen"
          >
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false}} />



          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
