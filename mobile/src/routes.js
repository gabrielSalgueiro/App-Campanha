// REACT E REACT NAVIGATION IMPORTS
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';

// COMPONENTS
import BottomTab from './navigation/BottomTab';
import EditProfile from './pages/EditProfile';

// STACK DO APP
const appStack = createStackNavigator();

// COMPONENT DE FLASH MESSAGE
import FlashMessage from "react-native-flash-message";

export default function Routes(){

    return (
        <NavigationContainer >
            <appStack.Navigator screenOptions={{headerShown: false}}>
                <appStack.Screen name="BottomTab" component={BottomTab} />
                <appStack.Screen name="EditProfile" component={EditProfile} />
            </appStack.Navigator>
            <FlashMessage position={{ top: 600, left: 20, right: 20 }} animated={true} floating={true}/>
        </NavigationContainer>
    );

}