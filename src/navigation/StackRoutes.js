// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/scressns/Login';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/scressns/Home';
import Signup from './src/scressns/Signup';
const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerStyle: {backgroundColor: 'green'},
          //   headerTitle: 'hello world',
          //   headerTitleAlign: 'center',
          // }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
