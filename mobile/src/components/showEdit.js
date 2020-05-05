import React from 'react';
import { Image, View, TouchableOpacity} from 'react-native';

import globalStyles from '../globalStyles'
import { MaterialIcons} from '@expo/vector-icons';

import crownIcon from '../assets/Icons/crown.png'

export default function ShowEdit({show, onPress}){
    if(show == false){
        return <View style={globalStyles.hideEditButton}>
            </View>
    }else{
        return(
            <TouchableOpacity onPress={onPress} style={globalStyles.editButton}>
                <MaterialIcons name={'edit'} color='#003D5C' size={28} />
            </TouchableOpacity>
        )
    } 


}