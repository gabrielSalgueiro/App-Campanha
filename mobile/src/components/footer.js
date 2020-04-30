import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native'


import styles from '../globalStyles'
import profileIcon from '../assets/Icons/profile.png';
import homeIcon from '../assets/Icons/home.png'
import searchIcon from '../assets/Icons/search.png'
import calendarIcon from '../assets/Icons/calendar.png'

export default function Footer(){

    const navigation =  useNavigation();

    function NavigateToMemberList(){
        navigation.navigate('MemberList');
    }

    return (

        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton}>
                <Image source = {homeIcon}/>
                <Text style = {styles.footerText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
                <Image source = {calendarIcon}/>
                <Text style = {styles.footerText}>Eventos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={NavigateToMemberList}style={styles.footerButton}>
                <Image source = {searchIcon}/>
                <Text style = {styles.footerText}>Membros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton}>
                <Image source={profileIcon} />
                <Text style = {styles.footerText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}