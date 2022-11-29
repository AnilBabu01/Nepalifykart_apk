// In App.js in a new project

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../scressns/Login';
import Login from '../scressns/Home';
import Signup from '../scressns/Signup';
import Flstlist from '../scressns/Flatlist';

const Tab = createBottomTabNavigator();
function BootomRoutes() {
  return (
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
  );
}

export default BootomRoutes;
