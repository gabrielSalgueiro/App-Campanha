import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    profileContainer:{
        backgroundColor: '#FFF',
        flex: 1,
    },
    photographyContainer:{
        height: 120,
    },
    editButtonContainer:{
        backgroundColor: '#3DACE1',
        height: 72,
        justifyContent: 'flex-end',
        flexDirection:  'row',
    },
    photo:{
        marginRight: 80,
        marginTop: 70,
        justifyContent:'space-around',
    },
    camera:{
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#3DACE1',
        backgroundColor: '#FFF8F8',
        marginLeft: 70,
        marginTop: 60,
        marginBottom: 20,
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    standartAvatar:{
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: '#3DACE1',
        backgroundColor: '#FFF8F8',
    },
    avatar: {
        width: 80,
        height: 80,
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

})
