import React, { useState , useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import { MaterialCommunityIcons} from '@expo/vector-icons';

import {View, Text, TextInput, TouchableOpacity} from 'react-native'

import styles from './styles'

// UTILS
import { verificaEspaço } from '../../utils'

// API
import api from '../../services/api';

export default function ResetPassword(){
    
    const [password, setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [securePassword, setSecurePassword] = useState(true)
    const [id, setId] = useState('')
    const [token, setToken] = useState('')

    const navigation =  useNavigation();
    const route = useRoute();

    useEffect(()=>{
        const ID = route.params.member_id
        setId(ID)
        const token = route.params.token
        setToken(token)
    }, [])

    function passwordView(){
        if(showPassword === false){
          setShowPassword(true)
          setSecurePassword(false)
        }else{
          setShowPassword(false)
          setSecurePassword(true)
        }
    }

    async function savePassword(){

        if(password == '' || verificaEspaço(password) === true ||
            password2 == '' || verificaEspaço(password2) === true){
            showMessage({
                message: 'Por favor, preencha os campos designados!',
                type: "info",
                backgroundColor: "#F79839",
                position: { top: 330, left: 20, right: 20 },
                style:{alignItems: 'center'}
            });
            return 
        }
        if(password != password2){
            showMessage({
                message: 'As senhas digitadas devem ser iguais!',
                type: "info",
                backgroundColor: "#F79839",
                position: { top: 330, left: 20, right: 20 },
                style:{alignItems: 'center'}
            });
            return 
        }
        console.log(token)
        try{
            const resp = await api.put(`/members/${id}/password/${token}`, {
                password: password
            })
            console.log(resp.data)
            showMessage({
                message: resp.data.message,
                type: "info",
                backgroundColor: "#3DACE1",
                position: { top: 330, left: 20, right: 20 },
                style:{alignItems: 'center'}
            });
            navigation.navigate('Login')

        }catch(error){
            const { data } = error.response;
            showMessage({
                message: data.err,
                type: "info",
                backgroundColor: "#F79839",
                position: { top: 330, left: 20, right: 20 },
                style:{alignItems: 'center'}
            });
        }
    } 

    return (
        <View style={styles.container}>
            <View style = {styles.inputBox}>
                <TextInput
                    style={styles.infoInput}
                    secureTextEntry={securePassword}
                    placeholder='Digite sua nova senha'   
                    autoCapitalize="none"
                    keyboardType="default"
                    value={password}
                    onChangeText ={password => setPassword(password)}
                />
                <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
                    <MaterialCommunityIcons 
                        name={showPassword===false?"eye":"eye-off"}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            
            <View style = {styles.inputBox}>
                <TextInput
                    style={styles.infoInput}
                    secureTextEntry={securePassword}
                    placeholder='Digite sua nova senha novamente'   
                    autoCapitalize="none"
                    keyboardType="default"
                    value={password2}
                    onChangeText ={password2 => setPassword2(password2)}
                />
                <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
                    <MaterialCommunityIcons 
                        name={showPassword===false?"eye":"eye-off"}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={savePassword}style={styles.button}>
                <Text>Criar Nova Senha</Text>
            </TouchableOpacity>
        </View>
    
    )
}