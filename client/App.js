import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ScreenNavigator from './src/navigations/ScreenNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <ScreenNavigator />
      </NavigationContainer>
    </>
  );
}
