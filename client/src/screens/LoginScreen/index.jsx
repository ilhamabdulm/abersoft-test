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

import { login } from '../../utils/fetch';
import { getToken, setToken } from '../../utils/storage.js';

import FrontLayout from '../../components/layouts/FrontLayout';

export default function LoginScreen({ navigation }) {
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
      const response = await login(state);
      if (response.success) {
        await setToken(response.data.token);
        await Alert.alert('Login Success');
        setState({
          email: '',
          password: '',
        });
        navigation.navigate('Main');
      }
    } catch (err) {
      console.log(err.response);
      Alert.alert('Login Failed');
    }
  };

  return (
    <FrontLayout navigate={() => navigation.navigate('Welcome')} screen="Login">
      <View style={styles.box}>
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
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
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </FrontLayout>
  );
}
