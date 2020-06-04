import React, { createContext, useState, useEffect, useContext } from 'react'
import {Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../services/api'

import {validateEmail} from '../utils'

const AuthContext = createContext({})

export function AuthProvider({children}){

    const [user, setUser] = useState(null)

    useEffect(() => {
        async function loadStoragedUserData(){
            const storagedUser = await AsyncStorage.getItem('@CampanhaAuth:user')

            if(storagedUser){
                setUser(JSON.parse(storagedUser))
            }
        }
        loadStoragedUserData()

    }, []);

    async function SignIn(email, password){

        if(email === '' || password === ''){
            console.log('Preencha Email e Senha!')
            return ;
        }else if(validateEmail(email) === false){
            console.log('Digite um email válido!')
            return ;
        }

        try{
            const resp = await api.post('/login',{
                email,
                password
            })
            setUser(resp.data)
            await AsyncStorage.setItem('@CampanhaAuth:user', JSON.stringify(resp.data))

        }catch(err){
            Alert.alert(err.message)
        }
    }

    async function Logout(){
        await AsyncStorage.clear()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, SignIn, Logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(){
    const context = useContext(AuthContext)

    return context
}