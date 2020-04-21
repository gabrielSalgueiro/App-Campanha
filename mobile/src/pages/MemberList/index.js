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


    function handleCheckBox() {
        if (checkCar === true) {
            setCheckCar(false)
        } else {
            setCheckCar(true)
        }
    }


    function sendWhatsapp(whatsapp){
        Linking.openURL(`whatsapp://send?phone=+55${whatsapp}`)
    }

    function filterMembers(){

        console.log(team)

        let members = allMembers.filter((member) =>{
            
            return ((member.name.includes(name) === true)) 
                    && (member.hasCar === checkCar) 
                    && (member.team.includes(team) === true)
        })
        setFilteredMembers(members)
    }

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
                        value={name}
                        onChangeText={setName}
                    >
                    </TextInput>
    
                </View>
                
                {/* VIEW COM OS FILTROS DE CARRO E NÚCLEO*/}
                <View style={styles.filter}>
                    <Text>Carro:</Text>
                    <CheckBox
                        center
                        onPress={handleCheckBox}
                        checked={checkCar}
                        uncheckedColor='#003D5C'
                        checkedColor='#003D5C'
                    />

                    <Text>Time:</Text>
                    <View style={styles.PickerView}>
                        <Picker

                            selectedValue={team}
                            onValueChange={(itemValue, itemIndex) => {setTeam(itemValue); filterMembers()}}
                            style={styles.Picker}
                            mode = 'dropdown'
                        >
                            
                            <Picker.Item color='#B7B7B7' value='\n' label='Núcleo...' />
                            <Picker.Item label="Entidades" value="Entidades" />
                            <Picker.Item label="Divulgação" value="Divulgação" />
                            <Picker.Item label="Infra" value="Infraestrutura" />
                            <Picker.Item label="RE" value="RE" />

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
                    
                            <Image style={styles.avatar} source={item.image === null? personIcon : {uri: item.image}} />
                            
                            <View style = {styles.cardInfoContainer}>
                                <View style = {styles.cardInfo}>
                                    <Text style = {styles.name}>{item.name}</Text>
                                    <TouchableOpacity style = {styles.profileIcon}>
                                        <Image source={profileIcon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>sendWhatsapp(item.wpp)}>
                                        <FontAwesome name={'whatsapp'} color='#003D5C' size={28} />
                                    </TouchableOpacity>

                                </View>
                                
                                <View style = {styles.cardInfo}>
                                    <Text style = {styles.name}>Time:</Text>
                                    <Text style = {styles.name}>{item.team}</Text>
                                    <MaterialIcons name={'directions-car'} color={item.hasCar ===1 ? '#979797' : '#F3F3F3'} size={32}/>
                                
                                </View>
                            </View>
                        </View>
                    )}
                />

            </View>

        </View>
    )

}