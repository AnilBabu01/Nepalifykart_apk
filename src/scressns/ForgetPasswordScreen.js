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

export default function ForgetPasswordScreen() {
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
          <View style={styles.customInputContainer}>
            <Text>Enter The otp</Text>
            <TextInput style={{padding: 0}} />
          </View>

          <View style={styles.customInputContainer}>
            <Text>Enter The New Password</Text>
            <TextInput style={{padding: 0}} secureTextEntry={true} />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>
              Forget Password
            </Text>
          </TouchableOpacity>
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
