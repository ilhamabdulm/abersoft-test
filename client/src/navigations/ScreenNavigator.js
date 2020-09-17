import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import { getToken } from '../utils/storage';

const Stack = createStackNavigator();

function ScreenNavigator() {
  const headerOptions = {
    headerShown: false,
  };
  const [initialRoute, setInitialRoute] = useState('Welcome');

  useEffect(() => {
    const token = getToken();
    if (token) {
      setInitialRoute('Main');
    } else {
      setInitialRoute('Welcome');
    }
  }, [initialRoute]);

  const renderCondition = () => {
    return (
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ ...headerOptions }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ ...headerOptions }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ ...headerOptions }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ ...headerOptions }}
        />
      </Stack.Navigator>
    );
  };

  return renderCondition();
}

export default ScreenNavigator;
