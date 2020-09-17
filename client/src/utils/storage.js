import { AsyncStorage } from 'react-native';

export const getToken = async () => {
  const token = await AsyncStorage.getItem('user_token');
  return JSON.stringify(token) || '';
};

export const setToken = async (value) =>
  await AsyncStorage.setItem('user_token', JSON.stringify(value));
