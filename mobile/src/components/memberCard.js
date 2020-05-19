import React, { useState, useEffect } from 'react';
import { Image, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import styles from '../pages/MemberList/styles'

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import personIcon from '../assets/Icons/person.png';

export default function MemberCard({member, loaded, navigateFunction}){

    
    return (
        <ShimmerPlaceHolder
            style={{height:120, width:'100%', marginTop: 10, borderRadius: 6, }} 
            autoRun={true} 
            visible={loaded}
        >
            <TouchableOpacity 
                style = {styles.card}
                onPress ={navigateFunction}>
                
                    <ImageBackground style={styles.standartAvatar} source={personIcon}>
                        <Image style={styles.avatar}  source={{uri: member.image.url}} />
                    </ImageBackground>
                
                <View style = {styles.memberInfo}>
                        <View> 
                            <Text style = {styles.nickname}>{member.realName}</Text>
                            <Text style = {styles.name}>{member.name}</Text>
                        </View>
                    <Text style = {styles.team}>{member.team.name}</Text>
                </View>
                <View style = {styles.iconsInfo}>
                    <FontAwesome5 name={'crown'} color={member.coord === true ? '#003D5C' : '#F3F3F3'} size={28}/>
                    <MaterialIcons  name={'directions-car'} color={member.hasCar ===1 ? '#003D5C' : '#F3F3F3'} size={32}/>
                </View>
            </TouchableOpacity>
        </ShimmerPlaceHolder>
    )
}