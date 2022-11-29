// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../scressns/Login';
import Home from '../scressns/Home';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarItemStyle: {width: 100},
          tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="login" component={Login} />
        <Tab.Screen name="Homfe" component={Home} />
        <Tab.Screen name="lfogin" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTab;
