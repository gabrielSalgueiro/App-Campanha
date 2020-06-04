// REACT E REACT NAVIGATION IMPORTS
import React, { useContext }from 'react';
import { createStackNavigator }  from '@react-navigation/stack';

// COMPONENTS
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword'

//AUTHENTICATION STACK
const AuthStack = createStackNavigator();

export default function AuthStackScreen() {
    return(
        <AuthStack.Navigator screenOptions={{headerShown: true}}>
            <AuthStack.Screen  options={{headerShown: false}} name="Login" component={Login}/>
            <AuthStack.Screen  options ={{headerTransparent: true, 
                                            headerTitleAlign: 'center',
                                        }} 
                                name="Resetar Senha" 
                                component={ForgotPassword}/>
        </AuthStack.Navigator>
    
    );
} 