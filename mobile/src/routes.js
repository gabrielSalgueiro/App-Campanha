import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator }  from '@react-navigation/stack';

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
        </NavigationContainer>
    );

}