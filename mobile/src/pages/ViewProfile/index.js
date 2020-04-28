import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { MaterialIcons, Feather, FontAwesome5, FontAwesome} from '@expo/vector-icons';
import personIcon from '../../assets/Icons/person.png';

import styles from './styles';
import globalStyles from '../../globalStyles';

import Header from '../../components/header'

import api from '../../services/api';

export default function ViewProfile(){

    const navigation =  useNavigation();

    function NavigateBack(){
        navigation.goBack();
    }

    return (
        <View 
            style={globalStyles.container}>
            <Header title='Perfil' backFunc = {NavigateBack}/>
            
            <View style={styles.profileContainer}>
                
                {/* Parte com o botão de editar e a foto */}
                <View style = {styles.photographyContainer}>
                    <View style = {styles.editButtonContainer}>
                        <View style = {styles.photo}>
                            <ImageBackground style={styles.standartAvatar} source={personIcon}>
                                <Image style={styles.avatar}  source={{uri: 'https://avatars1.githubusercontent.com/u/39507204?s=460&u=5fc1f198be9793fc056d9b62f0c7272b89d9de49&v=4'}} />
                            </ImageBackground>
                        </View>
                        <View style={styles.editButton}>
                            <MaterialIcons name={'edit'} color='#003D5C' size={28} />
                        </View>
                    </View>
                    
                </View>
                {/* Informações do membro */}

                <View styles =  {styles.infoContainer}>
                   
                    <View style =  {styles.names}>
                        <Text style = {styles.realName}>Gabriel Alfonso Nascimento Salgueiro</Text>
                        <Text style = {styles.nickname}>(Grajaú)</Text>
                    </View>
                    <View style = {styles.informations}>
                        <View style={styles.iconTextContainer}>
                            <Feather name={'mail'} color = '#003D5C'size={29}/>
                            <Text style = {styles.textInfo}>
                                gabrielalfonsosalgueiro@usp.br
                            </Text>
                            <TouchableOpacity style = {styles.clipboard}>
                                <FontAwesome5 name={'copy'} color = '#003D5C' size={22}/>
                            </TouchableOpacity>
                            
                            
                        </View>
                        <View style={styles.iconTextContainer}>
                            <MaterialIcons name={'school'} color = '#003D5C'size={29}/>
                            <Text style = {styles.textInfo}>
                                Ciências da Computação
                            </Text>
                        </View>
                        <View style={styles.iconTextContainer}>
                            <FontAwesome name={'whatsapp'} color = '#003D5C'size={34}/>
                            <Text style = {styles.textInfo}>
                                (11) 97806 - 6163
                            </Text>
                            <TouchableOpacity style = {styles.clipboard}>
                                <FontAwesome5 name={'link'} alt="Copy to clipboard" color = '#003D5C' size={18}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    <View style = {styles.carTeamContainer}>

                        <MaterialIcons  name={'directions-car'} color='#003D5C' size={32}/>
                            <MaterialIcons name={'people-outline'} color = '#003D5C'size={32}/>

                    </View>

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
        </View>
    )
}