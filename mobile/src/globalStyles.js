import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3DACE1',
  },
  authContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#003D5C',
    paddingVertical: 20,
  },
  footer: {
    height: 0.08 * height,
  },
  footerText: {
    fontWeight: '500',
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
  },
  showCrown: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35,
  },
  hideCrown: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35,
  },
  editSaveButton: {
    marginRight: 0.11 * width,
    alignSelf: 'center',
  },
  hideEditSaveButton: {
    marginRight: 0.18 * width,
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
  inputIcon: {
    justifyContent: 'center',
  },
  successButton: {
    marginTop: 0.03 * height,
    backgroundColor: '#3DACE1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.7 * width,
    height: 0.06 * height,
    borderWidth: 1,
    borderColor: '#003D5C',
    borderRadius: 20,
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight: '900',
    fontSize: 16,
    color: '#FFF',
  },
  errorButton: {
    marginTop: 0.03 * height,
    backgroundColor: '#F79839',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.7 * width,
    height: 0.06 * height,
    borderWidth: 1,
    borderColor: '#003D5C',
    borderRadius: 20,
  },
});
