import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#003D5C',
    },

    header:{
        backgroundColor: '#003D5C',
        justifyContent: 'space-around',
        alignItems: "center",
        height: 48,
        flexDirection: "row",
    },
    headerText:{
        fontWeight: 'bold',
        color: '#FEFEFE',
        fontSize: 24,
        justifyContent: 'center',
        alignSelf: 'center'
    },

})