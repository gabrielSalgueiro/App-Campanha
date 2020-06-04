import React, { useState , useEffect} from 'react';
import {Animated, Dimensions} from 'react-native'

let {height, width} = Dimensions.get('window');

export function ShowUpAnimation(offset,opacity){
    Animated.parallel([
        Animated.spring(offset.y, {
            toValue: 40,
            speed: 4,
            bounciness: 60
        }),
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000
        })

    ]).start()
}

export function keyboardDidShowAnimation(logo){
    Animated.parallel([
        Animated.timing(logo.x, {
            toValue: width*0.7,
            duration: 20
        }),
        Animated.timing(logo.y, {
            toValue: height*0.15,
            duration: 20
        })
    ]).start()
}

export function keyboardDidHideAnimation(logo){
    Animated.parallel([
        Animated.timing(logo.x, {
            toValue: width,
            duration: 20
        }),
        Animated.timing(logo.y, {
            toValue: height*0.2,
            duration: 20
        })
    ]).start()
}