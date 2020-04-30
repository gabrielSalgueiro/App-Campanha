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
    editButton:{
        marginRight: 50,
        alignSelf: 'center'
    },
    hideEditButton:{
        marginRight: 78,
    },
    photo:{
        marginRight: 90,
        marginTop: 70,
        justifyContent:'space-around'
    },
    showCrown:{
        alignSelf: 'center',
        marginBottom: 90,
    },
    hideCrown:{
        alignSelf: 'center',
        marginBottom: 135,
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
    realName:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    nickname:{
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
    },
    informations:{
        alignItems: 'center',
    },
    iconTextContainer:{
        width: 360,
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    textInfo:{
        marginLeft: 20,
        fontWeight: '500',
        fontSize: 16,
    },
    clipboard:{
        marginLeft: 10
    },
    carTeamContainer:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    car:{
        alignSelf: 'center'
    },
    frequencyCard:{
        height: 160,
        marginHorizontal: 30,
        borderRadius: 8,
        marginTop: 30,
        backgroundColor: '#ECECEC',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    title:{
        color: '#003D5C',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5
    },
    frequency:{
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    frequencyValue:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorBox:{
        backgroundColor: '#B93B3B',
        height: 16,
        width: 16,
        marginRight: 10,
        
    }

})
