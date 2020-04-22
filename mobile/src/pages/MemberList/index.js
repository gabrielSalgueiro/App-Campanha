import React, { useState, useEffect } from 'react';
import { Linking, FlatList, Picker, Image, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import profileIcon from '../../assets/Icons/Profile.png';
import personIcon from '../../assets/Icons/person.png';

import styles from './styles';
import globalStyles from '../globalStyles';

import api from '../../services/api';

export default function MemberList() {

    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [checkCar, setCheckCar] = useState(false);
    const [allMembers, setAllMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);

    function sendWhatsapp(whatsapp){
        Linking.openURL(`whatsapp://send?phone=+55${whatsapp}`)
    }

    function handleCheckBox() {
        
        if (checkCar == true) {
            setCheckCar(false)
            filterMembersbyCar(false);
        } else {
            setCheckCar(true)
            filterMembersbyCar(true);
        }
        
    }

    function filterMembersbyTeam(team){
        setTeam(team);
        const newData = allMembers.filter(member =>{
            const memberData = `${member.name.toUpperCase()} ${member.realName.toUpperCase()}`
            const textData =  name.toUpperCase();
            if(checkCar == false){
                if(team == 'all')
                    return (memberData.indexOf(textData) > -1)
                else
                    return (memberData.indexOf(textData) > -1) &&
                        (member.team.name.toUpperCase() == team.toUpperCase())
            }else{

                if(team == 'all')
                    return (memberData.indexOf(textData) > -1) &&
                        (member.hasCar == 1);
                else
                    return  (memberData.indexOf(textData) > -1) &&
                            (member.team.name.toUpperCase() == team.toUpperCase()) &&
                            (member.hasCar == 1);
            }
        });

        setFilteredMembers(newData);
    };

    function filterMembersbyCar(hasCar){
        const newData = allMembers.filter(member =>{
            const memberData = `${member.name.toUpperCase()} ${member.realName.toUpperCase()}`
            const textData =  name.toUpperCase();
            if(hasCar == false){
                if(team == 'all')
                    return (memberData.indexOf(textData) > -1)
                else
                    return (memberData.indexOf(textData) > -1) &&
                        (member.team.name.toUpperCase() == team.toUpperCase())
            }else{

                if(team == 'all')
                    return (memberData.indexOf(textData) > -1) &&
                        (member.hasCar == 1);
                else
                    return  (memberData.indexOf(textData) > -1) &&
                            (member.team.name.toUpperCase() == team.toUpperCase()) &&
                            (member.hasCar == 1);
            }
            
        });

        setFilteredMembers(newData);
    };
    
    function filterMembersbyName(name){
        setName(name);
        const newData = allMembers.filter(member =>{
            const memberData = `${member.name.toUpperCase()} ${member.realName.toUpperCase()}`
            const textData =  name.toUpperCase();
            if(checkCar == false){
                if(team == 'all')
                    return (memberData.indexOf(textData) > -1)
                else
                    return (memberData.indexOf(textData) > -1) &&
                        (member.team.name.toUpperCase() == team.toUpperCase())
            }else{

                if(team == 'all')
                    return (memberData.indexOf(textData) > -1) &&
                        (member.hasCar == 1);
                else
                    return  (memberData.indexOf(textData) > -1) &&
                            (member.team.name.toUpperCase() == team.toUpperCase()) &&
                            (member.hasCar == 1);
            }
        });

        setFilteredMembers(newData);
    };

    useEffect(() => {
        async function loadMembers(){
            const resp = await api.get('/members', {
                
            })
            setAllMembers(resp.data);
            setFilteredMembers(resp.data)
        }
        loadMembers();
    }, [])

    return (
        <View 
        
        style={globalStyles.container}>

            {/* HEADER DA PÁGINA */}
            <View style={globalStyles.header}>
                <TouchableOpacity style={globalStyles.arrow}>
                    <Feather name={'arrow-left'} color='#F2F2F2' size={28} />
                </TouchableOpacity>
                <Text style={globalStyles.headerText}>Lista de Membros</Text>
                <TouchableOpacity>
                    <Image source={profileIcon} />
                </TouchableOpacity>
            </View>

            {/* SEARCH BAR */}
            <View style={styles.searchBar}>

                {/* VIEW COM LEITURA DO NOME DO MEMBRO E 
                        ICONE DE PESQUISA */}
                <View style={styles.nameSearch}>
                    <TextInput
                        autoCapitalize="words" // sem a primeira letra maiuscula
                        placeholder="Nome do Membro..."
                        placeholderTextColor="#B7B7B7"
                        style={styles.inputText}
                        onChangeText={name => filterMembersbyName(name)}
                    >
                    </TextInput>
    
                </View>
                
                {/* VIEW COM OS FILTROS DE CARRO E NÚCLEO*/}
                <View style={styles.filter}>
                    <Text>Carro:</Text>
                    <CheckBox
                        checked = {checkCar}
                        center
                        onPress={handleCheckBox}
                        uncheckedColor='#003D5C'
                        checkedColor='#003D5C'
                    />

                    <Text>Time:</Text>
                    <View style={styles.PickerView}>
                        <Picker

                            selectedValue={team}
                            onValueChange={(itemValue, itemIndex) => {filterMembersbyTeam(itemValue)}}
                            style={styles.Picker}
                            mode = 'dropdown'
                        >
                            
                            <Picker.Item color='#B7B7B7' value='all' label='Núcleo...' />
                            <Picker.Item label="Entidades" value="Entidades" />
                            <Picker.Item label="Divulgação" value="Divulgação" />
                            <Picker.Item label="Infra" value="Infraestrutura" />
                            <Picker.Item label="RE" value="Relações Externas" />

                        </Picker>
                        
                    </View>

                </View>
                <View style={styles.line} />
                <View style={styles.line} />

            </View>

            <View style={styles.cardsContainer}>
                <FlatList 
                    data = {filteredMembers}
                    vertical
                    showsVerticalScrollIndicator={false}
                    keyExtractor = {member => member._id}
                    renderItem = { ( { item } ) => (
                        <View style = {styles.card}>
                    
                            <Image style={styles.avatar} defaultSource={number = require('../../assets/Icons/person.png')} source={{uri: item.image}} />
                            
                            <View style = {styles.cardInfoContainer}>
                                <View style = {styles.cardInfo}>
                                    <Text style = {styles.name}>{item.realName}</Text>
                                    <TouchableOpacity style = {styles.profileIcon}>
                                        <Image source={profileIcon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>sendWhatsapp(item.wpp)}>
                                        <FontAwesome name={'whatsapp'} color='#003D5C' size={28} />
                                    </TouchableOpacity>

                                </View>
                                
                                <View style = {styles.cardInfo2}>
                                    <Text style = {styles.team}>{item.team.name}</Text>
                                    <View style = {styles.carIcon}>
                                        <MaterialIcons name={'directions-car'} color={item.hasCar ===1 ? '#979797' : '#F3F3F3'} size={32}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />

            </View>

        </View>
    )

}