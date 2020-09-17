import React, { useEffect, useState } from 'react';
import styles from './styles.js';
import {
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { register } from '../../utils/fetch';
import { getToken } from '../../utils/storage.js';

import FrontLayout from '../../components/layouts/FrontLayout';

export default function RegisterScreen({ navigation }) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const token = getToken();
    if (token) navigation.navigate('Main');
  }, []);

  const handleChange = (text) => (name) => {
    const stateCopy = { ...state };
    stateCopy[name] = text;
    setState(stateCopy);
  };

  const handleSubmit = async () => {
    try {
      const response = await register(state);
      if (response.success) {
        Alert.alert('Register Success, please login to continue');
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log(err);
      Alert.alert('Register Failed');
    }
  };

  return (
    <FrontLayout
      navigate={() => navigation.navigate('Welcome')}
      screen="Register"
    >
      <View style={styles.box}>
        <View style={styles.content}>
          <Text style={styles.title}>Register new account</Text>
          <KeyboardAvoidingView style={styles.form}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#ccc"
              placeholder="Email"
              onChangeText={(text) => handleChange(text)('email')}
              value={state.email}
            />
            <TextInput
              autoCompleteType="password"
              style={styles.textInput}
              placeholderTextColor="#ccc"
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={(text) => handleChange(text)('password')}
              value={state.password}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.inputButton}>
              <Text style={styles.buttonText}>Create account</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </FrontLayout>
  );
}
