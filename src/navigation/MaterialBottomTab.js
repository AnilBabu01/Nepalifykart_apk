import React from 'react';
import Login from '../scressns/Login';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../scressns/Home';
import Signup from '../scressns/Signup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Flatlist from '../scressns/Flatlist';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Amazon from '../scressns/Amazon';
import HomeScreen from '../scressns/HomeScreen';
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
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <Ionicons
                name={focused ? 'home-outline' : 'home'}
                size={20}
                color={focused ? '#fa9c23' : 'white'}
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <Icon
                name="widgets"
                size={28}
                color={focused ? '#fa9c23' : 'white'}
              />
            );
          },
        }}
        name="Categories"
        component={Flatlist}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <Icon
                name="work"
                size={28}
                color={focused ? '#fa9c23' : 'white'}
              />
            );
          },
        }}
        name="My Orders"
        component={Flatlist}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <Ionicons
                name={focused ? 'archive-outline' : 'archive'}
                size={20}
                color={focused ? '#fa9c23' : 'white'}
              />
            );
          },
        }}
        name="Shipping"
        component={Amazon}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, tintColor, size}) => {
            return (
              <Ionicons
                name={focused ? 'shirt-outline' : 'shirt'}
                size={20}
                color={focused ? '#fa9c23' : 'white'}
              />
            );
          },
        }}
        name="Rental"
        component={Flatlist}
      />
    </Tab.Navigator>
  );
}

export default MaterialBottomTab;
