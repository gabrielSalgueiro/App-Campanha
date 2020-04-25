import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import personIcon from '../../assets/Icons/person.png';

import styles from './styles';
import globalStyles from '../globalStyles';

import api from '../../services/api';

export default function ViewProfile(){

    const navigation =  useNavigation();

    function NavigateBack(){
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>

            {/* HEADER DA PÁGINA */}
            <View style={globalStyles.header}>
                <TouchableOpacity 
                    onPress={NavigateBack}
                    style={globalStyles.arrow}
                >
                    <Feather name={'arrow-left'} color='#F2F2F2' size={28} />
                </TouchableOpacity>
                <Text style={globalStyles.headerText}>Ver Perfil</Text>
            </View>
        </View>
    )
}