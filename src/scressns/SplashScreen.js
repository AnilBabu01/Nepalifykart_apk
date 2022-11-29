import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from '../assests/logo.png';
const SplashScreen = () => {
  return (
    <View style={style.maincontainer}>
      <StatusBar hidden={true} />
      <View></View>
      <View style={style.logocontainer}>
        <Text style={style.textsplsh}>
          <Ionicons name="home" size={20} />
          Nepalifykart
        </Text>
      </View>
      <View style={style.bottomcontainer}>
        <Text style={style.bottomtext}>Made by ❤️ Nepalify-Kart Team</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textsplsh: {
    fontSize: 25,
    color: '#fa9c23',
  },

  logocontainer: {
    alignItems: 'center',
  },
  bottomcontainer: {},
  bottomtext: {},
});
