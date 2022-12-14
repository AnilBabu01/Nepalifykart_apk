import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/scressns/Login';
import Signup from './src/scressns/Signup';
import SplashScreen from './src/scressns/SplashScreen';
import MaterialBottomTab from './src/navigation/MaterialBottomTab';
import Drawert from './src/navigation/Drawert';
import Loginscreen from './src/scressns/Loginscreen';
import SignupSreen from './src/scressns/SignupSreen';
import ResetPasswordScreen from './src/scressns/ResetPasswordScreen';
import ForgetPasswordScreen from './src/scressns/ForgetPasswordScreen';
import ProductDetailsScreen from './src/scressns/ProductDetailsScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="SplashScreen"
            component={SplashScreen}
          />
        ) : null}
        <Stack.Screen
          options={{headerShown: false}}
          name="Drawert"
          component={Drawert}
        />
        <Stack.Screen
          name="MaterialBottomTab"
          component={MaterialBottomTab}
          options={{
            // headerStyle: {backgroundColor: 'green'},
            // headerTitle: 'hello world',
            // headerTitleAlign: 'center',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Loginscreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupSreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Resetpassword"
          component={ResetPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgetpassword"
          component={ForgetPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
