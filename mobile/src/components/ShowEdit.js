import React from 'react';
import { Image, View } from 'react-native';

import styles from '../pages/ViewProfile/styles'
import { MaterialIcons} from '@expo/vector-icons';

import crownIcon from '../assets/Icons/crown.png'

export default function ShowEdit({show}){
    if(show == false){
        return <View style={styles.hideEditButton}>
            </View>
    }else{
        return(
            <View style={styles.editButton}>
                <MaterialIcons name={'edit'} color='#003D5C' size={28} />
            </View>
        )
    } 


}