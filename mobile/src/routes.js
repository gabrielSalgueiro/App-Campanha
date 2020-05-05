import React from 'react';
import {NavigationContainer} from '@react-navigation/native'


import BottomTab from './components/BottomTab'

import FlashMessage from "react-native-flash-message";



export default function Routes(){

    return (
        <NavigationContainer >
            <BottomTab/>
            <FlashMessage position={{ top: 600, left: 20, right: 20 }} animated={true} floating={true}/>
        </NavigationContainer>
    );

}