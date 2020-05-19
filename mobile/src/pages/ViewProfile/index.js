// REACT E REACT NATIVES IMPORTS

import React, { useState, useEffect } from 'react';
import { Image, Clipboard,ImageBackground, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { showMessage} from "react-native-flash-message";

// ICONS
import { MaterialIcons, Feather, Entypo, FontAwesome5, FontAwesome} from '@expo/vector-icons';
import personIcon from '../../assets/Icons/person.png';
import carIcon from '../../assets/Icons/Car.png'
import notCarIcon from '../../assets/Icons/notCar.png'


// ESTILOS
import styles from './styles';
import globalStyles from '../../globalStyles';

// COMPONENTES
import DrawerModal from '../../components/drawerModal';
import PasswordModal from '../../components/passwordModal'
import ShowCrown from '../../components/showCrown'
import ShowEditSave from '../../components/showEditSave'
import TeamIcon from '../../components/TeamIcon'

// API
import api from '../../services/api';


export default function ViewProfile(){

    const route = useRoute();
    const navigation =  useNavigation();

    const [drawerVisible, setDrawerVisible] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [loaded, setLoaded] =  useState(false)
    const [member, setMember] = useState({
        wpp: '',
        team:{
            name:''
        },
        image:{
            url:''
        }
    })

    const logged_memberID = "5ec0116c85150250b8e80bb3" // ID DO PSY

    function NavigateToEditProfile(member){
        setDrawerVisible(false)
        navigation.navigate('EditProfile', {member});
    }
    let memberId
    // CHAMADA API PARA BUSCAR AS INFORMACOES DO MEMBRO NO BANCO
    useEffect(()=>{

        // O PADRAO DA TELA É A TELA DE PERFIL DO USUARIO LOGADO
        // SE HOUVER UM ID NA ROTA, ENTAO EU PEGO OS DADOS DO MEMBRO QUE TEM ESSE ID NOVO
        memberId = logged_memberID
        if (route.params?.id) {
            memberId = route.params?.id
          }


        async function getMember(){
            const resp =  await api.get(`/members/${memberId}`,{

            })
            setMember(resp.data)

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
            message: "Copiado para a Área de Transferência",
            type: "info",
            backgroundColor: "#3DACE1",
            style:{alignItems: 'center'}
          });
    }

    let data ={
        name: member.name,
        realName: member.realName,
        email: member.email,
        password: member.password,
        wpp: member.wpp,
        team: member.team._id,
        course: member.course,
        hasCar: member.hasCar,
        coord: member.coord
    }

    async function saveInformations(newPassword){
        data.password = newPassword
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
            message: "Senha alterada com sucesso!",
            type: "info",
            backgroundColor: "#3DACE1",
            position: { top: 70, left: 20, right: 20 },
            style:{alignItems: 'center'}
          });
    }

    function changePasswordButton(){
        setDrawerVisible(false)
        setPasswordVisible(true)
    }

    function cancelPasswordModal(){
        setPasswordVisible(false)
    }

    return (
        <View 
            style={globalStyles.container}>
            <DrawerModal 
                visible={drawerVisible} 
                close={() => setDrawerVisible(false)}
                editProfile={() =>NavigateToEditProfile(member)}
                changePassword={changePasswordButton}
            />
            <PasswordModal
                password={member.password}
                visible={passwordVisible}
                save={saveInformations}
                cancel={cancelPasswordModal}
            />
            
            <View style={styles.profileContainer}>
                
                {/* Parte com o botão de editar e a foto */}
                <ShimmerPlaceHolder
                    style={{height:120, width:'90%', marginTop: 10, marginLeft: 10}} 
                    autoRun={true} 
                    visible={loaded}
                >
                    <View style = {styles.photographyContainer}>
                        <View style = {styles.editButtonContainer}>
                            <View style = {styles.photoContainer}>
                                <View style = {styles.photo}>
                                <ShowCrown show ={member.coord}/>
                                    <ImageBackground style={styles.standartAvatar} source={personIcon}>
                                        <Image style={styles.avatar}  source={{uri: member.image.url}} />
                                    </ImageBackground>
                                    
                                </View>
                            </View>
                            <ShowEditSave type="edit" onPress={()=>setDrawerVisible(true)}show = {member._id == logged_memberID}/>
                        
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
                            <TeamIcon color='#003D5C' size={28} team={member.team.name}/>
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