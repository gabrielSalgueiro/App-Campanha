import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#3DACE1',
    },

    footer:{
        backgroundColor: '#003D5C',
        justifyContent: 'space-around',
        alignItems: "center",
        height: 55,
        flexDirection: "row",
    },
    footerText:{
        fontWeight: '500',
        color: '#FEFEFE',
        fontSize: 12,
        justifyContent: 'center',
        textAlign: 'center'
    },
    footerButton:{
        flexDirection: 'column',
        alignItems: 'center'
    },

    showCrown:{
        alignSelf: 'center',
        marginBottom: 90,
    },
    hideCrown:{
        alignSelf: 'center',
        marginBottom: 135,
    },
    editButton:{
        marginRight: 50,
        alignSelf: 'center'
    },
    hideEditButton:{
        marginRight: 78,
    },

})