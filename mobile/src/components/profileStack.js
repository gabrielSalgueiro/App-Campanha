import React from 'react';
import { createStackNavigator }  from '@react-navigation/stack';

import ViewProfile from '../pages/ViewProfile';
import EditProfile from '../pages/EditProfile'

const profileStack = createStackNavigator();

export default function profileStackScreen() {
    return(
        <profileStack.Navigator screenOptions={{headerShown: false}}>
            <profileStack.Screen name="ViewProfile" component={ViewProfile}/>
            <profileStack.Screen name="EditProfile" component={EditProfile}/>
        </profileStack.Navigator>
    
    );
} 