import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    cardsContainer:{
        flex: 1,
        backgroundColor: '#3DACE1',
        paddingHorizontal: 5,
        
    },

    searchBar: {
        backgroundColor: '#3DACE1',
        height: 150,
    },
    nameSearch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
    },
    inputText: {
        height: 46,
        width: 350,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30,
        marginTop: 13,
        paddingHorizontal: 16,
    },

    filter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        paddingLeft: 40
    },
    PickerView: {
        marginLeft: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000000',
        overflow: 'hidden',
    },
    Picker: {
        backgroundColor: '#fff',
        height: 23,
        width: 117,
        paddingHorizontal: 16,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 340,
        alignSelf: 'center',
        margin: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    card: {
        borderColor: '#DDD',
        borderRadius: 6,
        borderWidth: 0.5,
        marginTop: 5,
        height: 100,
        elevation: 2,
        flexDirection: 'row',
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    avatar: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 17,
        backgroundColor: '#FFF8F8'
    },
    cardInfoContainer:{
        flexDirection: 'column',
    },

    cardInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    name:{
        color: "#000000",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: 'center',
        width: 100,
        alignContent: 'stretch'
    },
    profileIcon:{
        width: 50,
        alignContent: 'stretch'
    }
});