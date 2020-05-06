// REACT E REACT NAVIGATION IMPORTS
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// COMPONENTS
import MemberList from '../pages/MemberList';
import ViewProfile from '../pages/ViewProfile';
import MemberListStackScreen from './memberListStack';

// ESTILOS E ICONES
import styles from '../globalStyles'
import profileIcon from '../assets/Icons/profile.png';
import homeIcon from '../assets/Icons/home.png'
import searchIcon from '../assets/Icons/search.png'
import calendarIcon from '../assets/Icons/calendar.png'


// BOTTOM TAB NAVIGATOR
const Tabs = createBottomTabNavigator();

export default function BottomTab(){

    return (

        <Tabs.Navigator  
            screenOptions={{headerShown: false}}
            initialRouteName="Membros"
            tabBarOptions={{style: styles.footer
                ,labelStyle: styles.footerText,
            }}
            
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
                listeners={({ navigation }) => ({
                    tabPress: () => {
                        // Força o navegador para ir para a tela de lista de membros
                        // ao invés de ir apra o topo da stack
                        navigation.navigate("Membros")
                    }
                })}
                options={{
                    tabBarIcon:() => (
                        <Image source = {searchIcon}/>
                )
                }}
                component = {MemberListStackScreen} 
            />
            <Tabs.Screen 
                name  =  "Perfil" 
                options={{
                    tabBarIcon:() => (
                        <Image source = {profileIcon}/>
                )
                }}
                component = {ViewProfile} 
            />
            
        </Tabs.Navigator>
    )
}