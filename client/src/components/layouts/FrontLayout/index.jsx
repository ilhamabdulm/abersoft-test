import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles.js';

export default function LoginScreen({ children, navigate, screen }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3549FB', '#4ED2DA']}
        start={[0, 0.05]}
        end={[0, 0.8]}
        style={styles.gradient}
      />
      {screen !== 'Welcome' && (
        <TouchableOpacity onPress={navigate} style={styles.backButton}>
          <Ionicons name="md-arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
}
