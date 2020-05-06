// REACT E REACT NATIVES IMPORTS

import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, View, Text, TextInput,TouchableOpacity,} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { showMessage} from "react-native-flash-message";

// ICONS
import { MaterialIcons, Feather, FontAwesome5, FontAwesome} from '@expo/vector-icons';
import personIcon from '../../assets/Icons/person.png';
import carIcon from '../../assets/Icons/Car.png'
import notCarIcon from '../../assets/Icons/notCar.png'
import infraIcon from '../../assets/Icons/infraIcon.png'
import reIcon from '../../assets/Icons/reIcon.png'
import divulgaIcon from '../../assets/Icons/divulgaIcon.png'
import entidadesIcon from '../../assets/Icons/entidadesIcon.png'
import geralIcon from '../../assets/Icons/geralIcon.png'

// ESTILOS
import styles from './styles';
import globalStyles from '../../globalStyles';

// COMPONENTES
import ShowCrown from '../../components/showCrown'
import ShowEditSave from '../../components/showEditSave'

import api from '../../services/api';

export default function EditProfile(){

    // NAVIGATION PROPS
    const route = useRoute();
    const navigation =  useNavigation();
    const member = route.params.member; // ID DO MEMBRO DO PERFIL
    
    //STATES
    const [teamIcon, setTeamIcon] = useState()
    const [name, setName] =  useState(member.name)
    const [nickname, setNickName] = useState(member.realName)
    const [email, setEmail] =  useState(member.email)
    const [course, setCourse] =  useState(member.course)
    const [wpp, setWpp] =  useState(member.wpp)
    const [hasCar, setHasCar] = useState(member.hasCar)
    const [photo, setPhoto] = useState(member.image)

    useEffect(()=>{
        if(member.team.name == 'Geral')
            setTeamIcon(geralIcon)
        else if(member.team.name == 'Infraestrutura')
            setTeamIcon(infraIcon)
        else if(member.team.name == 'Entidades')
            setTeamIcon(entidadesIcon)
        else if(member.team.name == 'Divulgação')
            setTeamIcon(divulgaIcon)
        else
            setTeamIcon(reIcon)
    }, [])
    let data ={
        name: name,
        realName: nickname,
        email: email,
        password: member.password,
        wpp: wpp,
        team: member.team._id,
        image: photo,
        course: course,
        hasCar: hasCar,
        coord: member.coord
    }
    async function saveInformations(){
        const resp = await api.put(`/members/${member._id}`, data)
        

        // reseta a pagina de perfil
        // ainda não entendi como funciona direito
        navigation.reset({
            index: 0,
            routes: [{name: "Perfil"}]
        });

        // Navega para a tela de perfil da BottomTab
        navigation.navigate('BottomTab', {
            screen: "Perfil"
        })
        showMessage({
            message: "Informações salvas com sucesso!",
            type: "info",
            backgroundColor: "#3DACE1"
          });
    }

    return (
        <View 
            style={globalStyles.container}>
            <View style={styles.profileContainer}>
                
                {/* Parte com o botão de editar e a foto */}
                
                    <View style = {styles.photographyContainer}>
                        <View style = {styles.editButtonContainer}>
                        
                            <View style = {styles.photo}>
                                
                                <ImageBackground style={styles.standartAvatar} source={personIcon}>
                                    <Image style={styles.avatar}  source={{uri: photo}} />
                                </ImageBackground>
                                <TouchableOpacity activeOpacity={0.4} style =  {styles.camera}>    
                                    <MaterialIcons name = "photo-camera" color = "#003D5C" size={28}/>
                                </TouchableOpacity>
                                <ShowCrown show ={member.coord}/>
                                
                            </View>
                            <ShowEditSave onPress={saveInformations} type="save"show = {true}/>
                        </View>
                    </View>
                
                {/* Informações do membro */}
                
                <View styles =  {styles.infoContainer}>
                    
                   
                        <View style =  {styles.names}>
                            <View style ={styles.nameBox}>
                                <TextInput 
                                    style = {styles.nameInput}
                                    autoCapitalize="words" 
                                    multiline={true}
                                    value={name}
                                    onChangeText={name=>setName(name)}
                                />
                            </View>
                            <View style ={styles.nameBox}>
                                <TextInput 
                                    style = {styles.nameInput}
                                    autoCapitalize="words" 
                                    multiline={true}
                                    value={nickname}
                                    onChangeText={nickname=>setNickName(nickname)}
                                />
                            </View>
                            
                        </View>
                    
                        <View style = {styles.informations}>
                    
                            <View style={styles.iconTextContainer}>
                                <Feather name={'mail'} color = '#003D5C'size={29}/>
                                <View style ={styles.infoBox}>
                                    <TextInput 
                                        style = {styles.infoInput}
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        value={email}
                                        onChangeText={email=>setEmail(email)}
                                    />
                                </View>
                                
                                
                            </View>
                            <View style={styles.iconTextContainer}>
                                <MaterialIcons name={'school'} color = '#003D5C'size={29}/>
                                
                                <View style ={styles.infoBox}>
                                    <TextInput 
                                        style = {styles.infoInput}
                                        value={course}
                                        onChangeText={course=>setCourse(course)}
                                    />
                                </View>
                            </View>
                            <View style={styles.iconTextContainer}>
                                <FontAwesome name={'whatsapp'} color = '#003D5C'size={34}/>
                                <View style ={styles.infoBox}>
                                    <TextInput 
                                        style = {styles.infoInput}
                                        keyboardType="phone-pad" 
                                        value={wpp}
                                        onChangeText={wpp=>setWpp(wpp)}
                                    />
                                </View>
                                
                            </View>
                        
                        </View>
                    
                        <View style = {styles.carTeamContainer}>
                            
                            <TouchableOpacity 
                                style = {styles.carTeamButton} 
                                onPress={() => setHasCar(hasCar==0? 1:0)}
                            >
                                <Image style = {styles.car} source = {hasCar == 0 ? notCarIcon : carIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.carTeamButton}>
                                <Image source = {teamIcon}/>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style = {styles.passwordContainer}>
                              <Text style={styles.password}>Alterar Senha</Text>
                        </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}