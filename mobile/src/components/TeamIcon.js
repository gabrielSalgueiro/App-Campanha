import React, { useState, useEffect } from 'react';
import { MaterialIcons, Feather, Entypo, FontAwesome5, FontAwesome} from '@expo/vector-icons';


export default function TeamIcon({team, color, size}){
    if(team == 'Geral')
        return (<FontAwesome5 name="crown" color={color} size={size}/>)
    else if(team == 'Infraestrutura')
        return (<FontAwesome5 name="box-open" color={color} size={size}/>)
    else if(team == 'Entidades')
        return (<MaterialIcons name="people-outline" color={color} size={size+4}/>)
    else if(team == 'Divulgação')
        return (<Entypo name="megaphone" color={color} size={size}/>)
    else
        return (<FontAwesome5 name="money-bill-alt" color={color} size={size}/>)
}