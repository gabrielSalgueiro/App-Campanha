import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LoaderModal from '../../modals/loaderModal';

import styles from './styles';

// UTILS
import { verificaEspaço } from '../../utils';

// API
import api from '../../services/api';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const [id, setId] = useState('');

  const [loaderVisible, setLoaderVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const { memberId: ID } = route.params;
    setId(ID);
  }, []);

  function passwordView() {
    if (showPassword === false) {
      setShowPassword(true);
      setSecurePassword(false);
    } else {
      setShowPassword(false);
      setSecurePassword(true);
    }
  }

  async function savePassword() {
    if (
      currentPassword === '' ||
      verificaEspaço(currentPassword) === true ||
      newPassword === '' ||
      verificaEspaço(newPassword2) === true ||
      newPassword2 === '' ||
      verificaEspaço(newPassword2) === true
    ) {
      showMessage({
        message: 'Por favor, preencha todos os campos!',
        type: 'info',
        backgroundColor: '#F79839',
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      return;
    }
    if (newPassword !== newPassword2) {
      showMessage({
        message: 'Por favor repita corretamente a nova senha!',
        type: 'info',
        backgroundColor: '#F79839',
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      return;
    }
    try {
      setLoaderVisible(true);
      const resp = await api.put(`/members/${id}/password/`, {
        currentPassword,
        newPassword,
      });
      showMessage({
        message: resp.data.message,
        type: 'info',
        backgroundColor: '#3DACE1',
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      setLoaderVisible(false);
      navigation.navigate('BottomTab', {
        screen: 'Perfil',
      });
    } catch (error) {
      setLoaderVisible(false);
      const { data } = error.response;
      console.log(data);
      showMessage({
        message: data.message,
        type: 'info',
        backgroundColor: '#F79839',
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
    }
  }

  return (
    <View style={styles.container}>
      <LoaderModal visible={loaderVisible} text="Salvando as informações..." />
      <View style={styles.inputBox}>
        <TextInput
          style={styles.infoInput}
          secureTextEntry={securePassword}
          placeholder="Digite sua senha atual"
          autoCapitalize="none"
          keyboardType="default"
          value={currentPassword}
          onChangeText={(currentPassword) =>
            setCurrentPassword(currentPassword)
          }
        />
        <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
          <MaterialCommunityIcons
            name={showPassword === false ? 'eye' : 'eye-off'}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.infoInput}
          secureTextEntry={securePassword}
          placeholder="Digite sua nova senha"
          autoCapitalize="none"
          keyboardType="default"
          value={newPassword}
          onChangeText={(newPassword) => setNewPassword(newPassword)}
        />
        <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
          <MaterialCommunityIcons
            name={showPassword === false ? 'eye' : 'eye-off'}
            size={20}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.infoInput}
          secureTextEntry={securePassword}
          placeholder="Digite sua nova senha novamente"
          autoCapitalize="none"
          keyboardType="default"
          value={newPassword2}
          onChangeText={(newPassword2) => setNewPassword2(newPassword2)}
        />
        <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
          <MaterialCommunityIcons
            name={showPassword === false ? 'eye' : 'eye-off'}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.cancelButton}
        >
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={savePassword} style={styles.saveButton}>
          <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
