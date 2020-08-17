import React  from "react";
import {View, Text, TouchableOpacity} from "react-native"

import {useAuth} from "../../contexts/auth"
export default function Dashboard (){

    const {Logout} = useAuth()

    function handleLogout(){
        Logout()
    }
    return (
        <View style = {{flex:1, justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity onPress = {handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}