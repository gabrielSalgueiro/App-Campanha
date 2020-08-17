import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#003D5C',
    paddingVertical: 20,
  },
  emailContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center',
  },
  input: {
    width: 0.86 * width,
    height: 0.06 * height,
    fontSize: 16,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
    alignSelf: 'center',
    color: '#FFF',
  },
  sendButton: {
    marginTop: 0.03 * height,
    backgroundColor: '#3DACE1',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.7 * width,
    height: 0.05 * height,
    borderWidth: 1,
    borderColor: '#003D5C',
    borderRadius: 10,
  },
});
