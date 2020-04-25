import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import personIcon from '../../assets/Icons/person.png';

import styles from './styles';
import globalStyles from '../../globalStyles';

import Header from '../../components/header'

import api from '../../services/api';

export default function ViewProfile(){

    const navigation =  useNavigation();

    function NavigateBack(){
        navigation.goBack();
    }

    return (
        <View 
            style={globalStyles.container}>
            <Header title='Perfil' backFunc = {NavigateBack}/>
        </View>
    )
}