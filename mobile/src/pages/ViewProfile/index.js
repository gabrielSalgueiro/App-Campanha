// REACT E REACT NATIVES IMPORTS

import React, { useState, useEffect } from 'react';
import { Image, RefreshControl, Clipboard,ImageBackground, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

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
import ShowEdit from '../../components/showEdit'
import Footer from '../../components/footer'
import Loading from '../../components/Loading'

import api from '../../services/api';

export default function ViewProfile(){

    const route = useRoute();
    const [loading, setLoading] =  useState(true)
    const [teamIcon, setTeamIcon] = useState()
    const [member, setMember] = useState({})
    const logged_memberID = "5e9f74fcba69b800176e0ac7" // ID DO MIOJAO
    
    const memberId = route.params.id; // ID DO MEMBRO DO PERFIL
    const navigation =  useNavigation();
    
    // CHAMADA API PARA BUSCAR AS INFORMACOES DO MEMBRO NO BANCO
    useEffect(()=>{
        
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
            setLoading(false)
        }
        getMember();
    }, [])

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+55${member.wpp}`)
    }

    function copyToClipboard(){
        Clipboard.setString(member.email)
    }

    if(loading == true)
        return(
            <Loading/>
        )
    else if(loading == false)
        return (
        <View 
            style={globalStyles.container}>
            
            
            <View style={styles.profileContainer}>
                
                {/* Parte com o botão de editar e a foto */}
                <View style = {styles.photographyContainer}>
                    <View style = {styles.editButtonContainer}>
                       
                        
                        <View style = {styles.photo}>
                            
                            <ImageBackground style={styles.standartAvatar} source={personIcon}>
                                <Image style={styles.avatar}  source={{uri: member.image}} />
                            </ImageBackground>
                            <ShowCrown show ={member.coord}/>
                        </View>
                        <ShowEdit show = {member._id == logged_memberID}/>
                    </View>
                    
                </View>
                {/* Informações do membro */}

                <View styles =  {styles.infoContainer}>
                   
                    <View style =  {styles.names}>
                        <Text style = {styles.realName}>{member.name}</Text>
                        <Text style = {styles.nickname}>({member.realName})</Text>
                    </View>
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

                    <View style = {styles.carTeamContainer}>
                        <Image style = {styles.car} source = {member.hasCar == 0 ? notCarIcon : carIcon}/>
                        <Image source = {teamIcon}/>
                        

                    </View>
                    {/* Card de Frequencia*/}
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

                </View>
            </View>

            <Footer />

        </View>
    )
}