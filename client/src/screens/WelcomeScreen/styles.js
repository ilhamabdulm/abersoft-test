import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/screenSize';

export default StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    justifyContent: 'flex-end',
  },
  actionBox: {
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 70,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffffff',
    width: 270,
    padding: 10,
    marginVertical: 30,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
