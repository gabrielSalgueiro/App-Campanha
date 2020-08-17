import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3DACE1',
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
});
