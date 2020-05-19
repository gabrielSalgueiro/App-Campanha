// REACT E REACT NATIVES IMPORTS

import React, { useState, useEffect } from 'react';
import { Image, Alert, ImageBackground, View, Text, TextInput,TouchableOpacity,} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { showMessage} from "react-native-flash-message";

// ICONS
import { MaterialIcons, Feather, FontAwesome5, FontAwesome} from '@expo/vector-icons';
import personIcon from '../../assets/Icons/person.png';
import carIcon from '../../assets/Icons/Car.png'
import notCarIcon from '../../assets/Icons/notCar.png'

// ESTILOS
import styles from './styles';
import globalStyles from '../../globalStyles';

// COMPONENTES
import ShowCrown from '../../components/showCrown'
import ShowEditSave from '../../components/showEditSave'
import TeamIcon from '../../components/TeamIcon'
import CameraModal from '../../components/cameraModal'

import api from '../../services/api';

export default function EditProfile(){


    // NAVIGATION PROPS
    const route = useRoute();
    const navigation =  useNavigation();
    const member = route.params.member; // ID DO MEMBRO DO PERFIL
    
    //STATES
    const [name, setName] =  useState(member.name)
    const [nickname, setNickName] = useState(member.realName)
    const [email, setEmail] =  useState(member.email)
    const [course, setCourse] =  useState(member.course)
    const [wpp, setWpp] =  useState(member.wpp)
    const [hasCar, setHasCar] = useState(member.hasCar)
    const [photo, setPhoto] = useState(member.image.url)
    const [cameraVisible, setCameraVisible] = useState(false)

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

    function Cancel(){
        navigation.goBack();
    }

    function clearWpp(){

        var temp = String(wpp)

        temp = temp.replace(' ', '')
        temp = temp.replace('(', '')
        temp = temp.replace(')', '')

        setWpp(temp)
    }

    function validateEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            return true;
        } else {
            Alert.alert(
                'Erro de Submissão',
                'E-mail no formato Incorreto !'

            )
            //alert("E-mail no formato Incorreto !");
            return false;
        }
    }

    function validateWhatsApp(){
        var re = /(\+\d{2})?\s?(\(?\d{2}\)?\s?)(\d{4,5}\-?\d{4})/;
        if (re.test(wpp)){
            console.log('wpp funfo')

            clearWpp()
            return true;
            
        } else {
            console.log('wpp deu ruim')
            Alert.alert(
                'Erro de Submissão',
                'Whatsapp no formato Incorreto !'

            )
            //alert("E-mail no formato Incorreto !");
            return false;
        }
    }

    async function saveInformations(){

        if(validateEmail() === false){
            return ;
        }
        validateWhatsApp()
        return; 
        try{
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
            backgroundColor: "#3DACE1",
            position: { top: 70, left: 20, right: 20 },
            style:{alignItems: 'center'}
          });
        }catch(error){
            Alert.alert(error
            )
        }
    }

    return (
        <View 
            style={globalStyles.container}>
            <CameraModal visible={cameraVisible}
                cancel={()=>setCameraVisible(false)}
                save={()=>setCameraVisible(false)}
            />

            <View style={styles.profileContainer}>
                
                {/* Parte com o botão de editar e a foto */}
                
                    <View style = {styles.photographyContainer}>
                        <View style = {styles.editButtonContainer}>
                            
                            <TouchableOpacity onPress={Cancel}style={styles.cancelButton}>
                                <Text style = {styles.cancelText}>Cancelar</Text>
                            </TouchableOpacity>
                            

                            <View style = {styles.photoContainer}>
                                <View style = {styles.photo}>
                                    <ShowCrown show ={member.coord}/>
                                    <ImageBackground style={styles.standartAvatar} source={personIcon}>
                                        <Image style={styles.avatar}  source={{uri: photo}} />
                                    </ImageBackground>
                                    
                                </View>
                                <View style = {styles.cameraContainer}>
                                    <TouchableOpacity onPress={() =>setCameraVisible(true)} 
                                    activeOpacity={0.4} style =  {styles.camera}>    
                                        <MaterialIcons name = "photo-camera" color = "#003D5C" size={26}/>
                                    </TouchableOpacity>
                                </View>
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
                                <TeamIcon color='#003D5C' size={22}team={member.team.name}/>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>

        </View>
    )
}