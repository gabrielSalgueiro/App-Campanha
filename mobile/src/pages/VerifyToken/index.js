import React, { useState , useEffect} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native'

import { showMessage } from "react-native-flash-message";

import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles'

// UTILS
import { verificaEspaço } from '../../utils'

export default function ForgotPassword(){
    
    const [token, setToken] = useState('')

    const route = useRoute();
    const navigation =  useNavigation();

    const [id, setId] = useState('')

    useEffect(() => {
        const ID = route.params.member_id
        setId(ID)
    }, [])

    function resetPassword(){
        if(token == '' || verificaEspaço(token) === true){
            showMessage({
                message: 'Por favor, preencha o campo designado!',
                type: "info",
                backgroundColor: "#F79839",
                position: { top: 330, left: 20, right: 20 },
                style:{alignItems: 'center'}
            });
            return 
        }
        navigation.navigate('Criar Nova Senha', {token: token, member_id:id})
    }
    return (
        <View style={styles.container}>
            <View style={styles.emailContainer}>
                <TextInput
                    style = {styles.input}
                    placeholder='Digite o Código'   
                    autoCapitalize="none"
                    keyboardType="default"
                    value={token}
                    onChangeText ={token => setToken(token)}
                />
                <TouchableOpacity onPress={resetPassword}style={styles.sendButton}>
                    <Text>Criar Nova Senha</Text>
                </TouchableOpacity>
            </View>
            
            
            <View style={styles.failedButton}>
                <Text style={styles.text}>Não recebeu o código?</Text>
                <TouchableOpacity onPress={()=>navigation.goBack()}style={styles.button}>
                    <Text>Reenviar Código de Segurança</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    
    )
}