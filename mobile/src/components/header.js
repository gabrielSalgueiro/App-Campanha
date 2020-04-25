import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import styles from '../globalStyles'
import {Feather} from '@expo/vector-icons';
import profileIcon from '../assets/Icons/Profile.png';


export default function Header({title, backFunc}){

    return (

        <View style={styles.header}>
            <TouchableOpacity 
                style={styles.arrow}
                onPress = {backFunc}
            >
                <Feather name={'arrow-left'} color='#F2F2F2' size={28} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity>
                <Image source={profileIcon} />
            </TouchableOpacity>
        </View>
    )
}