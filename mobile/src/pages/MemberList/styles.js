import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    scrollContainer:{
        flex: 1,
        backgroundColor: '#3DACE1',
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
        width: 294,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30,
        marginTop: 13,
        paddingHorizontal: 16,
    },

    searchButton: {
        marginLeft: 16,
        marginTop: 16,
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
    }

});