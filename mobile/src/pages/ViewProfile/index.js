/* eslint-disable no-underscore-dangle */
// REACT E REACT NATIVES IMPORTS

import React, { useState, useEffect } from 'react';
import { Image, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

// ICONS
import {
  MaterialIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';
import carIcon from '../../assets/Icons/Car.png';
import notCarIcon from '../../assets/Icons/notCar.png';

// ESTILOS
import styles from './styles';
import globalStyles, { colors } from '../../globalStyles';

// MODALS
import DrawerModal from '../../modals/drawerModal';

// COMPONENTES
import ShowCrown from '../../components/showCrown';
import ShowEditSave from '../../components/showEditSave';
import TeamIcon from '../../components/TeamIcon';

// API
import api from '../../services/api';

// UTILS
import { copyToClipboard, sendWhatsapp } from '../../utils';

export default function ViewProfile() {
  // NAVIGATION PROPS
  const route = useRoute();
  const navigation = useNavigation();

  // STATES
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loggedMemberID, setLoggedMemberID] = useState('');
  const [member, setMember] = useState({
    wpp: '',
    team: {
      name: '',
    },
  });

  // NAVEGA PARA A TELA DE EDITAR PERFIL
  function NavigateToEditProfile(member) {
    setDrawerVisible(false);
    navigation.navigate('EditProfile', { member });
  }

  // FECHA O DRAWER MODAL E MOSTRA O PASSWORD MODAL
  function changePasswordButton() {
    setDrawerVisible(false);
    navigation.navigate('Trocar Senha', { memberId: loggedMemberID });
  }

  // RECUPERA AS INFORMAÇÕES DO MEMBRO NO BANCO
  async function getMember(memberId) {
    const resp = await api.get(`/members/${memberId}`, {});
    setMember(resp.data);
    setLoaded(true);
  }

  // CHAMADA API PARA BUSCAR AS INFORMACOES DO MEMBRO NO BANCO
  useEffect(() => {
    async function getLoggedMember() {
      const resp = JSON.parse(await AsyncStorage.getItem('@CampanhaAuth:user'));
      setMember(resp);
      setLoggedMemberID(resp._id);
    }

    // O PADRAO DA TELA É A TELA DE PERFIL DO USUARIO LOGADO
    // SE HOUVER UM ID NA ROTA, ENTAO EU PEGO OS DADOS DO MEMBRO QUE TEM ESSE ID NOVO
    getLoggedMember();
    if (route.params?.id) {
      getMember(route.params.id);
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <View style={globalStyles.container}>
      {/* MODALS */}
      <DrawerModal
        visible={drawerVisible}
        close={() => setDrawerVisible(false)}
        editProfile={() => NavigateToEditProfile(member)}
        changePassword={changePasswordButton}
      />
      <StatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
        translucent
      />
      <View>
        <StatusBar hidden={false} />
      </View>

      {/* PAGE */}
      <View style={styles.profileContainer}>
        {/* Parte com o botão de editar e a foto */}
        <ShimmerPlaceHolder
          style={{ height: 120, width: '90%', marginTop: 10, marginLeft: 10 }}
          autoRun
          visible={loaded}
        >
          <View style={styles.photographyContainer}>
            <View style={styles.editButtonContainer}>
              <View style={styles.photoContainer}>
                <View style={styles.photo}>
                  <ShowCrown show={member.coord} />
                  <Avatar
                    containerStyle={styles.standartAvatar}
                    size="large"
                    rounded
                    title={member.name ? member.name.slice(0, 2) : 'UN'}
                    onPress={() => console.log('Works!')}
                    activeOpacity={0.8}
                    source={{ uri: member.image ? member.image.url : 'none' }}
                  />
                </View>
              </View>
              <ShowEditSave
                type="edit"
                onPress={() => setDrawerVisible(true)}
                show={member._id === loggedMemberID}
              />
            </View>
          </View>
        </ShimmerPlaceHolder>
        {/* Informações do membro */}

        <View styles={styles.infoContainer}>
          <ShimmerPlaceHolder
            style={{
              height: 70,
              width: '80%',
              marginTop: 10,
              marginHorizontal: 30,
            }}
            autoRun
            visible={loaded}
          >
            <View style={styles.names}>
              <Text style={styles.realName}>{member.name}</Text>
              <Text style={styles.nickname}>({member.realName})</Text>
            </View>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={{
              height: 160,
              width: '80%',
              marginTop: 10,
              marginHorizontal: 30,
            }}
            autoRun
            visible={loaded}
          >
            <View style={styles.informations}>
              <View style={styles.iconTextContainer}>
                <Feather name="mail" color={colors.primary} size={29} />
                <Text style={styles.textInfo}>{member.email}</Text>
                <TouchableOpacity
                  onPress={() => copyToClipboard(member.email)}
                  style={styles.clipboard}
                >
                  <FontAwesome5 name="copy" color={colors.primary} size={22} />
                </TouchableOpacity>
              </View>
              <View style={styles.iconTextContainer}>
                <MaterialIcons name="school" color={colors.primary} size={29} />
                <Text style={styles.textInfo}>{member.course}</Text>
              </View>
              <View style={styles.iconTextContainer}>
                <FontAwesome name="whatsapp" color={colors.primary} size={34} />
                <Text style={styles.textInfo}>
                  ({member.wpp.slice(0, 2)}) {member.wpp.slice(2, 7)}-{''}
                  {member.wpp.slice(7)}
                </Text>
                <TouchableOpacity
                  onPress={() => sendWhatsapp(member.wpp)}
                  style={styles.clipboard}
                >
                  <FontAwesome5 name="link" color={colors.primary} size={18} />
                </TouchableOpacity>
              </View>
            </View>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={{
              height: 70,
              width: '80%',
              marginTop: 10,
              marginHorizontal: 30,
            }}
            autoRun
            visible={loaded}
          >
            <View style={styles.carTeamContainer}>
              <Image
                style={styles.car}
                source={member.hasCar === 0 ? notCarIcon : carIcon}
              />
              <TeamIcon
                color={colors.primary}
                size={28}
                team={member.team.name}
              />
            </View>
          </ShimmerPlaceHolder>

          {/* Card de Frequencia */}
          <ShimmerPlaceHolder
            style={{
              height: 160,
              width: '80%',
              marginHorizontal: 30,
              marginTop: 30,
            }}
            autoRun
            visible={loaded}
          >
            <View style={styles.frequencyCard}>
              <Text style={styles.title}>Frequência:</Text>

              <View style={styles.frequency}>
                <Text>Reuniões de Núcleo:</Text>
                <View style={styles.frequencyValue}>
                  <View style={styles.colorBox} />
                  <Text>80%</Text>
                </View>
              </View>
              <View style={styles.frequency}>
                <Text>Reuniões Gerais:</Text>
                <View style={styles.frequencyValue}>
                  <View style={styles.colorBox} />
                  <Text>50%</Text>
                </View>
              </View>
              <View style={styles.frequency}>
                <Text>Eventos:</Text>
                <View style={styles.frequencyValue}>
                  <View style={styles.colorBox} />
                  <Text>10%</Text>
                </View>
              </View>
            </View>
          </ShimmerPlaceHolder>
        </View>
      </View>
    </View>
  );
}
