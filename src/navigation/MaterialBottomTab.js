import React from 'react';
import Login from '../scressns/Login';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../scressns/Home';
import Signup from '../scressns/Signup';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();

function MaterialBottomTab() {
  return (
    <Tab.Navigator
      activeColor="#fa9c23"
      inactiveColor="white"
      barStyle={{backgroundColor: '#232f3e'}}
      shifting={false}>
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home" size={20} color={'white'} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Ionicons name="search" size={20} color={'white'} />;
          },
        }}
        name="Login"
        component={Login}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Ionicons name="settings" size={20} color={'white'} />;
          },
        }}
        name="Sigdnup"
        component={Signup}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Ionicons name="person" size={20} color={'white'} />;
          },
        }}
        name="Signup"
        component={Signup}
      />
    </Tab.Navigator>
  );
}

export default MaterialBottomTab;
