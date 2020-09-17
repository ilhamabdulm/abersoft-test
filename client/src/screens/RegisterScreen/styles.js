import { StyleSheet } from 'react-native';
import { width, height } from '../../utils/screenSize';

export default StyleSheet.create({
  box: {
    width,
    height: height * 0.48,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    padding: 40,
  },
  content: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginTop: 15,
  },
  textInput: {
    borderBottomColor: '#3549FB',
    borderBottomWidth: 1,
    width: '100%',
    fontSize: 16,
    paddingVertical: 5,
    marginVertical: 15,
  },
  inputButton: {
    backgroundColor: '#3549FB',
    width: '100%',
    marginTop: 30,
    padding: 12,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
  },
});
