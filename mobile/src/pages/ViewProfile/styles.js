import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  profileContainer: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  photographyContainer: {
    height: 0.16 * height,
  },
  editButtonContainer: {
    backgroundColor: '#3DACE1',
    height: 0.1 * height,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 0.23 * width,
  },
  photo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 0.01 * height,
  },
  standartAvatar: {
    marginTop: 0.06 * height,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#3DACE1',
    backgroundColor: '#FFF8F8',
  },
  avatar: {
    width: 0.2 * width,
    height: 0.2 * width,
    resizeMode: 'cover',
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: '#3DACE1',
    alignSelf: 'center',
  },
  infoContainer: {
    alignItems: 'center',
  },
  names: {
    marginHorizontal: 40,
    marginBottom: 10,
  },
  realName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  informations: {
    alignItems: 'center',
  },
  iconTextContainer: {
    width: 360,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textInfo: {
    marginLeft: 20,
    fontWeight: '500',
    fontSize: 16,
  },
  clipboard: {
    marginLeft: 10,
  },
  carTeamContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  car: {
    alignSelf: 'center',
  },
  frequencyCard: {
    height: 160,
    marginHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    color: '#003D5C',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  frequency: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frequencyValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorBox: {
    backgroundColor: '#B93B3B',
    height: 16,
    width: 16,
    marginRight: 10,
  },
});
