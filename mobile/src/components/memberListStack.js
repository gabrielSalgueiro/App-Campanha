import React from 'react';
import { createStackNavigator }  from '@react-navigation/stack';

import ViewProfile from '../pages/ViewProfile';
import EditProfile from '../pages/EditProfile'
import MemberList from '../pages/MemberList';

const memberListStack = createStackNavigator();

export default function memberListStackScreen() {
    return(
        <memberListStack.Navigator screenOptions={{headerShown: false}}>
            <memberListStack.Screen name="MemberList" component={MemberList}/>
            <memberListStack.Screen name="ViewProfile" component={ViewProfile}/>
            <memberListStack.Screen name="EditProfile" component={EditProfile}/>
        </memberListStack.Navigator>
    
    );
} 