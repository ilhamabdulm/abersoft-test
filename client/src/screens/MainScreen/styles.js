import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/screenSize';

export default StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  illustration: {
    width: 282,
    height: 201,
    marginBottom: 30,
    marginRight: 50,
    resizeMode: 'contain',
  },
  text: {
    marginVertical: 18,
    textAlign: 'center',
    fontSize: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
