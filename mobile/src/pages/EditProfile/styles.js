import { StyleSheet, Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    profileContainer:{
        backgroundColor: '#FFF',
        flex: 1,
    },
    photographyContainer:{
        height: 0.16* height,
    },
    editButtonContainer:{
        backgroundColor: '#3DACE1',
        height: 0.1 * height,
        flexDirection:  'row',
        justifyContent: 'flex-end',
    },
    photoContainer:{
        flexDirection:  'row', 
        justifyContent: 'center',
        marginRight: 0.2 *width,
    },
    photo:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 0.035 * height,
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        
    },
    cameraContainer:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        marginTop: 0.125*height,
        justifyContent: 'flex-end'
    },
    camera:{
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#3DACE1',
        backgroundColor: '#FFF8F8',
        height: 0.085 * width,
        width: 0.085 * width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    standartAvatar:{
        marginTop: 0.08*height,
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: '#3DACE1',
        backgroundColor: '#FFF8F8',
    },
    avatar: {
        width: 0.20 * width,
        height: 0.20 * width,
        resizeMode: 'cover',
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: '#3DACE1',
        alignSelf: 'center'
    },

    infoContainer:{
        alignItems: 'center',
    },
    names:{
        marginHorizontal: 40,
        marginBottom: 10
    },
    nameBox:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#003D5C',
        borderRadius: 3,
        marginTop: 13,
        paddingHorizontal: 16,
        justifyContent: 'center'
    },
    nameInput:{
        textAlign: 'center',
        fontSize: 18,
        color: '#7D7D7D'
    },
    informations:{
        alignItems: 'center',
    },
    iconTextContainer:{
        width: 360,
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    infoBox:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#003D5C',
        borderRadius: 3,
        width: 280,
        justifyContent: 'center',
        marginLeft: 10
    },
    infoInput:{
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        color: '#7D7D7D',
        fontSize: 14,
    },
    carTeamContainer:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    carTeamButton:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#003D5C',
        borderRadius: 3,
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    car:{
        alignSelf: 'center'
    },
    passwordContainer:{
        marginTop: 24,
        width: 116,
        height: 24,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#003D5C',
    },
    password:{
        marginTop: 1,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: "500",
    }

})
