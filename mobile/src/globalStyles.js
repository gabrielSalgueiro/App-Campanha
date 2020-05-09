import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let {height, width} = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#3DACE1',
    },

    footer:{
        //backgroundColor: '#003D5C',
        height: 0.08 * height,
    },
    footerText:{
        fontWeight: '500',
        fontSize: 12,
        justifyContent: 'center',
        textAlign: 'center'
    },
    showCrown:{
        alignSelf: 'center',
        position: 'absolute',
        bottom: 35,
        left: 20,
    },
    hideCrown:{
        alignSelf: 'center',
    },
    editSaveButton:{
        marginRight: 0.1 * width,
        alignSelf: 'center'
    },
    hideEditSaveButton:{
        marginRight: 0.18 * width,
    },

})