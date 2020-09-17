import React from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#DF0707" />
    </View>
  );
}
