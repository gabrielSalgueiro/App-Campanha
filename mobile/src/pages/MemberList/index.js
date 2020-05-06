import React, { useState, useEffect } from 'react';
import { FlatList, Picker, View, TextInput, Text} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native'

import styles from './styles';
import globalStyles from '../../globalStyles';

import MemberCard from '../../components/memberCard';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function MemberList() {

    const navigation =  useNavigation();

    const logged_memberID = "5e9f710aba69b800176e0abf" // ID DO PSY
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [checkCar, setCheckCar] = useState(false);
    const [allMembers, setAllMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [loading, setLoading] =  useState(true)

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
            setLoading(false)
        }
        loadMembers();
    }, [])

    function NavigateToViewProfile(member){
        if(member._id == logged_memberID){
            navigation.navigate('Perfil');
        }

        navigation.navigate('MemberViewProfile', {id: member._id} );
    }

    if(loading == true)
        return(
            <Loading/>
        )
    else if(loading == false)
        return (
        <View 
        
        style={globalStyles.container}>


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
                            <Picker.Item label="Geral" value="Geral" />

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
                    renderItem = { ( { item: member } ) => (
                        <MemberCard member={member} navigateFunction = {() => NavigateToViewProfile(member)}/>
                    )}
                />

            </View>
             {/* HEADER DA PÁGINA <Footer />*/}
             
        </View>
    )

}