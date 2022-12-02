import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwsome from 'react-native-vector-icons/FontAwesome5';

//
// import BackgroundImg from '../../assets/img/bg-transferent.png';

export default function SignupSreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.formTopContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwsome name="angle-left" size={30} color="#fa9c23" />
        </TouchableOpacity>
      </View>
      <View style={styles.formBottomContainer}>
        <View style={styles.formBottomSubContainer}>
          {/* <View style={styles.customInputContainer}>
            <Text>Enter The Name</Text>
            <TextInput style={{padding: 0}} />
          </View> */}
          <View style={styles.customInputContainer}>
            <Text>Enter The Email</Text>
            <TextInput style={{padding: 0}} />
          </View>

          <View style={styles.customInputContainer}>
            <Text>Enter The Password</Text>
            <TextInput style={{padding: 0}} secureTextEntry={true} />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>
              Signup
            </Text>
          </TouchableOpacity>

          <Text style={{textAlign: 'center', color: '#fff'}}>Or</Text>

          {/* <TouchableOpacity
            style={[
              styles.loginButton,
              {
                backgroundColor: '#fff',
                flexDirection: 'row',
                padding: 20,
                justifyContent: 'space-around',
              },
            ]}>
            <Image
              source={{
                uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonarchive.com%2Ftag%2Fgoogle&psig=AOvVaw3KtLWsxIgE8kGzG5632eB1&ust=1670091222251000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLC2mdnE2_sCFQAAAAAdAAAAABAS',
              }}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
            <Text style={{fontWeight: 'bold', color: '#fa9c23'}}>
              Continue With Google
            </Text>
            <View></View>
          </TouchableOpacity> */}

          <View>
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <Text>Don't Have An Account</Text>
              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 5,
                    color: '#fa9c23',
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  formTopContainer: {
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 10,
    height: '10%',
  },
  formBottomContainer: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBottomSubContainer: {
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 20,
  },
  customInputContainer: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fa9c23',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#fa9c23',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
});
