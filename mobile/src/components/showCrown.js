import React from 'react';
import { Image, View } from 'react-native';

import styles from '../pages/ViewProfile/styles'


import crownIcon from '../assets/Icons/crown.png'

export default function ShowCrown({show}){
    if(show == false){
        return <View style ={styles.hideCrown} ></View>
    }else{
        return(
            <Image style = {styles.showCrown} source={crownIcon}/>
        )
    } 


}