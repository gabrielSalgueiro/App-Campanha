import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003D5C',
  },
  content: {
    justifyContent: 'space-between',
  },
  forgotPassword: {
    marginTop: height * 0.03,
    marginLeft: 2,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F79839',
  },
});
