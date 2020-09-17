import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { getToken } from '../../utils/storage';
import styles from './styles';

export default function MainScreen({ navigation }) {
  useEffect(() => {
    const token = getToken();
    if (!token) navigation.navigate('Welcome');
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require('../../../assets/illu_main.png')}
      />
      <Text style={{ ...styles.text, ...styles.title }}>
        Welcome to the app
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
        scelerisque porttitor turpis viverra lobortis convallis. Libero
        tristique donec turpis elit adipiscing sit faucibus tincidunt. Erat
        porttitor amet, nibh id lorem. Volutpat quam vestibulum egestas ut odio
        odio. Nunc non, feugiat a diam at lacus augue. Sit lacus pharetra eget
        feugiat aliquam enim adipiscing. Purus nec tortor tellus, neque montes.
        Gravida ornare eu viverra libero. Vulputate massa turpis posuere nibh
        dolor pulvinar bibendum. Viverra scelerisque ut dignissim at sit s
      </Text>
    </View>
  );
}
