import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003D5C',
  },
  inputContainer: {
    justifyContent: 'space-between',
  },
  input: {
    width: 0.7 * width,
    height: 0.05 * height,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFCFC',
    borderWidth: 1,
    borderColor: '#003D5C',
    borderRadius: 5,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  forgotPassword: {
    marginTop: 20,
    marginLeft: 2,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F79839',
  },
  logIn: {
    marginTop: 20,
    backgroundColor: '#3DACE1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.7 * width,
    height: 0.05 * height,
    borderWidth: 1,
    borderColor: '#003D5C',
    borderRadius: 20,
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
  },
});
