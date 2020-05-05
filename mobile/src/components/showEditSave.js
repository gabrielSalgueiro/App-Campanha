import React from 'react';
import { Image, View, TouchableOpacity} from 'react-native';

import globalStyles from '../globalStyles'
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';

import crownIcon from '../assets/Icons/crown.png'

export default function ShowEditSave({show, onPress, type}){
    if(show == false){
        return <View style={globalStyles.hideEditButton}>
            </View>
    }else{
        if(type == "save"){
            return(
                <TouchableOpacity onPress={onPress} style={globalStyles.editButton}>
                    <MaterialIcons name={"check"} color='#003D5C' size={28} />
                </TouchableOpacity>
            )
        }else{
            return(
                <TouchableOpacity onPress={onPress} style={globalStyles.editButton}>
                    <MaterialIcons name={"edit"} color='#003D5C' size={28} />
                </TouchableOpacity>
            )
        }
        
    } 


}