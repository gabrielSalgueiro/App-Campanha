import React from 'react';
import { Image} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// COMPONENTS
import MemberList from '../pages/MemberList';
import profileStackScreen from './profileStack';
import memberListStackScreen from './memberListStack'

const Tabs = createBottomTabNavigator();

// ESTILOS E ICONES
import styles from '../globalStyles'
import profileIcon from '../assets/Icons/profile.png';
import homeIcon from '../assets/Icons/home.png'
import searchIcon from '../assets/Icons/search.png'
import calendarIcon from '../assets/Icons/calendar.png'


export default function BottomTab(){

    return (

        <Tabs.Navigator  initialRouteName="Membros" 
            backBehavior={{
                initialRoute:true
            }}
            tabBarOptions={{style: styles.footer
                ,labelStyle: styles.footerText,
            }}
            screenOptions={{headerShown: false}}
        >
            <Tabs.Screen 
                name  =  "Inicio" 
                options={{
                    tabBarIcon:() => (
                        <Image source = {homeIcon}/>
                )
                }} 
                component = {MemberList}
            />
            <Tabs.Screen 
                name  =  "Eventos" 
                options={{
                    tabBarIcon:() => (
                        <Image source = {calendarIcon}/>
                )
                }}
                component = {MemberList}
            />
            <Tabs.Screen 
                name  =  "Membros" 
                options={{
                    tabBarIcon:() => (
                        <Image source = {searchIcon}/>
                )
                }}
                component = {memberListStackScreen} 
            />
            <Tabs.Screen 
                name  =  "Perfil" 
                options={{
                    tabBarIcon:() => (
                        <Image source = {profileIcon}/>
                )
                }}
                component = {profileStackScreen} 
            />
        </Tabs.Navigator>
    )
}