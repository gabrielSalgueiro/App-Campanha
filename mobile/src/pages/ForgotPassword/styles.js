import { StyleSheet, Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');


export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003D5C'
    },
})