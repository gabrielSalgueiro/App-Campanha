import React, { useState, useEffect } from 'react';
import { Image, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import { Avatar } from 'react-native-elements';
import ViewImageModal from '../modals/viewImageModal'

import styles from '../pages/MemberList/styles'

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


function MemberCard({member, loaded, navigateFunction}){

    const [ViewImageVisible, setViewImageVisible] = useState(false)
    
    return (

        <ShimmerPlaceHolder
            style={{height:120, width:'100%', marginTop: 10, borderRadius: 6, }} 
            autoRun={true} 
            visible={loaded}
        >
            <ViewImageModal 
                visible={ViewImageVisible}
                cancel={()=>setViewImageVisible(false)}
                image={member.image?member.image.url:'none'}
                name={member.realName}
            />
            <TouchableOpacity 
                style = {styles.card}
                onPress ={navigateFunction}>

                <Avatar
                size="large"
                rounded
                title={member.name.slice(0,2)}
                onPress={() => setViewImageVisible(true)}
                activeOpacity={0.8}
                source={{uri: member.image?member.image.url:'none'}}
                />
                
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

export default React.memo(MemberCard)