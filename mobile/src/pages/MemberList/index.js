import React, { useState } from 'react';
import { ScrollView, Picker, Image, View, TextInput, Text, TouchableOpacity } from 'react-native';

import { CheckBox } from 'react-native-elements'

import profileIcon from '../../assets/Icons/Profile.png'

import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons'

import styles from './styles'
import globalStyles from '../globalStyles'

export default function MemberList() {

    const [team, setTeam] = useState("all");
    const [checkCar, setCheckCar] = useState(false);

    function handleCheckBox() {
        if (checkCar === true) {
            setCheckCar(false)
        } else {
            setCheckCar(true)
        }
    }

    return (
        <View style={globalStyles.container}>

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
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.searchButton}>
                        <Feather name={'search'} color='#003D5C' size={32} />
                    </TouchableOpacity>
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
                            onValueChange={(itemValue, itemIndex) => setTeam(itemValue)}
                            style={styles.Picker}
                            mode = 'dropdown'
                        >
                            
                            <Picker.Item color='#B7B7B7' value='all' label='Núcleo...' />
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

            <ScrollView style={styles.scrollContainer}>
                
            </ScrollView>

        </View>
    )

}