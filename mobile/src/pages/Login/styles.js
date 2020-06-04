import { StyleSheet, Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');


export default StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003D5C'
    },
    input:{
        width: 0.7*width,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        backgroundColor: '#FFFCFC',
        borderWidth: 1,
        borderColor: '#003D5C',
        borderRadius: 5,
        paddingHorizontal: 15,
        alignSelf: 'center' 
    },
    forgotPassword:{
        marginTop: 5,
        marginLeft: 2,
        alignItems:'flex-start',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 10,
        color: '#F79839',
    },
    logIn:{
        marginTop: 20,
        backgroundColor: '#3DACE1', 
        alignItems:'center',
        justifyContent: 'center',
        width: 0.7*width,
        height: 0.05*height,
        borderWidth: 1,
        borderColor: '#003D5C',
        borderRadius: 10,
    },
})