import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator }  from '@react-navigation/stack';

const appStack = createStackNavigator();

import globalStyles from './pages/globalStyles'

import MemberList from './pages/MemberList/';

export default function Routes(){

    return (
        <NavigationContainer>
            <appStack.Navigator screenOptions={{headerShown: false}}>
                <appStack.Screen name  =  "MemberList" component = {MemberList} />
            </appStack.Navigator>
        </NavigationContainer>
    );

}