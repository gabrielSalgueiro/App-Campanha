// REACT E REACT NATIVES IMPORTS

import React, { useState, useEffect } from 'react';
import { Image, Clipboard,ImageBackground, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
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

export default function ViewProfile({logged_ID= ''}){

    const route = useRoute();
    const [loaded, setLoaded] =  useState(false)
    const [teamIcon, setTeamIcon] = useState()
    const [member, setMember] = useState({
        wpp: ''
    })
    const logged_memberID = "5e9f710aba69b800176e0abf" // ID DO PSY
    
    
    const navigation =  useNavigation();
    
    function NavigateToEditProfile(member){
        navigation.push('EditProfile', {member});
    }
    let memberId
    // CHAMADA API PARA BUSCAR AS INFORMACOES DO MEMBRO NO BANCO
    useEffect(()=>{
        memberId = '5e9f710aba69b800176e0abf'
        if (route.params?.id) {
            memberId = route.params?.id
          }


        async function getMember(){
            const resp =  await api.get(`/members/${memberId}`,{

            })
            setMember(resp.data)

            // ESCOLHENDO O ICONE CONFORME O TIME
            if(resp.data.team.name == 'Geral')
                setTeamIcon(geralIcon)
            else if(resp.data.team.name == 'Infraestrutura')
                setTeamIcon(infraIcon)
            else if(resp.data.team.name == 'Entidades')
                setTeamIcon(entidadesIcon)
            else if(resp.data.team.name == 'Divulgação')
                setTeamIcon(divulgaIcon)
            else
                setTeamIcon(reIcon)
            setLoaded(true)
        }
        getMember();
    }, [])

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+55${member.wpp}`)
    }

    function copyToClipboard(){
        Clipboard.setString(member.email)
        showMessage({
            message: "Copiado para a Área de Transferência.",
            type: "info",
            backgroundColor: "#3DACE1"
          });
    }

    return (
        <View 
            style={globalStyles.container}>
            
            
            <View style={styles.profileContainer}>
                
                {/* Parte com o botão de editar e a foto */}
                <ShimmerPlaceHolder
                    style={{height:120, width:'90%', marginTop: 10, marginLeft: 10}} 
                    autoRun={true} 
                    visible={loaded}
                >
                    <View style = {styles.photographyContainer}>
                        <View style = {styles.editButtonContainer}>
                        
                            <View style = {styles.photo}>
                                
                                <ImageBackground style={styles.standartAvatar} source={personIcon}>
                                    <Image style={styles.avatar}  source={{uri: member.image}} />
                                </ImageBackground>
                                <ShowCrown show ={member.coord}/>
                            </View>
                            <ShowEditSave type="edit" onPress={()=>NavigateToEditProfile(member)}show = {member._id == logged_memberID}/>
                        </View>
                    </View>
                </ShimmerPlaceHolder>
                {/* Informações do membro */}
                
                <View styles =  {styles.infoContainer}>
                    
                    <ShimmerPlaceHolder
                        style={{height:70, width: '80%', marginTop: 10,marginHorizontal: 30}} 
                        autoRun={true} 
                        visible={loaded}
                    >
                        <View style =  {styles.names}>
                            <Text style = {styles.realName}>{member.name}</Text>
                            <Text style = {styles.nickname}>({member.realName})</Text>
                        </View>
                    </ShimmerPlaceHolder>
                    <ShimmerPlaceHolder
                        style={{height:160, width: '80%', marginTop: 10,marginHorizontal: 30}} 
                        autoRun={true} 
                        visible={loaded}
                    >
                        <View style = {styles.informations}>
                    
                            <View style={styles.iconTextContainer}>
                                <Feather name={'mail'} color = '#003D5C'size={29}/>
                                <Text style = {styles.textInfo}>
                                    {member.email}
                                </Text>
                                <TouchableOpacity  onPress = {copyToClipboard}style = {styles.clipboard}>
                                    <FontAwesome5 name={'copy'} color = '#003D5C' size={22}/>
                                </TouchableOpacity>
                                
                                
                            </View>
                            <View style={styles.iconTextContainer}>
                                <MaterialIcons name={'school'} color = '#003D5C'size={29}/>
                                <Text style = {styles.textInfo}>
                                    {member.course}
                                </Text>
                            </View>
                            <View style={styles.iconTextContainer}>
                                <FontAwesome name={'whatsapp'} color = '#003D5C'size={34}/>
                                <Text style = {styles.textInfo}>
                                    ({member.wpp.slice(0,2)}) {member.wpp.slice(2,7)} - {member.wpp.slice(7)}
                                </Text>
                                <TouchableOpacity onPress = {sendWhatsapp}style = {styles.clipboard}>
                                    <FontAwesome5 name={'link'} color = '#003D5C' size={18}/>
                                </TouchableOpacity>
                            </View>
                        
                        </View>
                    </ShimmerPlaceHolder>
                    <ShimmerPlaceHolder
                        style={{height:70, width: '80%', marginTop: 10,marginHorizontal: 30}} 
                        autoRun={true} 
                        visible={loaded}
                    >
                        <View style = {styles.carTeamContainer}>
                            <Image style = {styles.car} source = {member.hasCar == 0 ? notCarIcon : carIcon}/>
                            <Image source = {teamIcon}/>
                        </View>
                    </ShimmerPlaceHolder>

                    {/* Card de Frequencia*/}
                    <ShimmerPlaceHolder
                    style={{height:160, width: '80%', marginHorizontal: 30, marginTop: 30}} 
                    autoRun={true} 
                    visible={loaded}
                    >
                        <View style={styles.frequencyCard}>
                            <Text style={styles.title}>Frequência:</Text>
                            
                            <View style = {styles.frequency}>
                                <Text>Reuniões de Núcleo:</Text>
                                <View style={styles.frequencyValue}>
                                    <View style={styles.colorBox}/>
                                    <Text>80%</Text>
                                </View>
                            </View>
                            <View style = {styles.frequency}>
                                <Text>Reuniões Gerais:</Text>
                                <View style={styles.frequencyValue}>
                                    <View style={styles.colorBox}/>
                                    <Text>50%</Text>
                                </View>
                            </View>
                            <View style = {styles.frequency}>
                                <Text>Eventos:</Text>
                                <View style={styles.frequencyValue}>
                                    <View style={styles.colorBox}/>
                                    <Text>10%</Text>
                                </View>
                                
                            </View>
                            
                        </View>
                    </ShimmerPlaceHolder>

                </View>
            </View>

        </View>
    )
}