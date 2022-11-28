import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {style} from '../style';

export default function Login() {
  const [email, setemail] = useState('dddd');
  const [password, setpassword] = useState('');
  return (
    <View style={style.main}>
      <View>
        <Text
          style={{
            fontSize: 22,
            color: 'red',
            marginLeft: 15,
            marginBottom: 15,
          }}>
          {email}
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: 'red',
            marginLeft: 15,
            marginBottom: 15,
          }}>
          {password}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 200,
        }}>
        <Text
          style={{
            fontSize: 22,
            color: 'red',
            marginLeft: 15,
            marginBottom: 15,
          }}>
          Enter your email
        </Text>
        <TextInput
          value={email}
          onChangeText={value => setemail(value)}
          style={style.inputstyle}
        />
        <Text
          style={{
            fontSize: 22,
            color: 'red',
            marginLeft: 15,
            marginBottom: 15,
          }}>
          Enter your password
        </Text>
        <TextInput
          value={password}
          onChangeText={value => setpassword(value)}
          style={style.inputstyle}
        />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={style.btn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
