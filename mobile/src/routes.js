import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator }  from '@react-navigation/stack';


import FlashMessage from "react-native-flash-message";

const appStack = createStackNavigator();

import MemberList from './pages/MemberList/';
import ViewProfile from './pages/ViewProfile';

export default function Routes(){

    return (
        <NavigationContainer>
            <appStack.Navigator screenOptions={{headerShown: false}}>
                <appStack.Screen name  =  "MemberList" component = {MemberList} />
                <appStack.Screen name  =  "ViewProfile" component = {ViewProfile} />
            </appStack.Navigator>
            <FlashMessage position={{ top: 600, left: 20, right: 20 }} animated={true} floating={true}/>
        </NavigationContainer>
    );

}