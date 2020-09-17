import React, { useEffect } from 'react';
import styles from './styles';

import { getToken } from '../../utils/storage';

import FrontLayout from '../../components/layouts/FrontLayout';
import { View, TouchableOpacity, Text } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    const token = getToken();
    if (token) navigation.navigate('Main');
  }, []);

  return (
    <FrontLayout screen="Welcome">
      <View style={styles.container}>
        <View style={styles.actionBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FrontLayout>
  );
}
