import { StyleSheet } from 'react-native';
import { width, height } from '../../../utils/screenSize';

export default StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height,
  },
  backButton: {
    marginTop: 30,
    marginLeft: 30,
    width: 30,
    height: 30,
  },
});
