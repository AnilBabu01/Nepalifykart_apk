import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Image} from 'react-native';
function CustomDrawer(props) {
  const {navigation} = props;
  return (
    <DrawerContentScrollView
      style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
      {...props}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          alignItems: 'center',
        }}>
        <Text
          onPress={() => navigation.closeDrawer()}
          style={{
            color: 'white',
            marginTop: 8,
            alignSelf: 'flex-end',
            marginRight: 16,
          }}>
          close
        </Text>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 24,
          }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY32UfTuRe83OES2BQfrpqO_OiaCQXwHKUw&usqp=CAU',
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
            }}
          />
          <Text style={{color: 'white'}}>Anil Babu</Text>
        </View>
      </View>
      <DrawerItem
        label="home"
        icon={() => <Ionicons name="home" size={20} />}
        onPress={() => navigation.navigate('Home')}
        labelStyle={{color: 'white'}}
      />
      <DrawerItem
        label="login"
        icon={() => <Ionicons name="home" size={20} />}
        onPress={() => navigation.navigate('login')}
        labelStyle={{color: 'white'}}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
