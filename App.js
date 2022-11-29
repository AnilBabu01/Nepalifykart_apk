// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/scressns/Home';
import Login from './src/scressns/Login';
import Signup from './src/scressns/Signup';
import Flstlist from './src/scressns/Flatlist';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="home" size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Login}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="search" size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Signup}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="settings" size={20} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Flstlist}
          options={{
            tabBarIcon: () => {
              return <Ionicons name="person" size={20} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       // options={{
    //       //   headerStyle: {backgroundColor: 'green'},
    //       //   headerTitle: 'hello world',
    //       //   headerTitleAlign: 'center',
    //       // }}
    //     />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
