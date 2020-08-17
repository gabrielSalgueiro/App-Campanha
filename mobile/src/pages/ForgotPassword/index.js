import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

// API
import api from '../../services/api';

// UTILS
import { validateEmail, verificaEspaço } from '../../utils';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  async function sendToken() {
    if (email === '' || verificaEspaço(email) === true) {
      showMessage({
        message: 'Por favor, preencha o campo designado!',
        type: 'info',
        backgroundColor: '#F79839',
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      return;
    }

    if (validateEmail(email) === false) {
      return;
    }
    try {
      const resp = await api.post('/token', {
        email,
      });
      const { id } = resp.data;
      showMessage({
        message: resp.data.message,
        type: 'info',
        backgroundColor: '#3DACE1',
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });

      navigation.navigate('Verificar Código', { memberId: id });
    } catch (error) {
      const { data } = error.response;
      showMessage({
        message: data.err,
        type: 'info',
        backgroundColor: '#F79839',
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TouchableOpacity onPress={sendToken} style={styles.sendButton}>
        <Text>Enviar Código de Segurança</Text>
      </TouchableOpacity>
    </View>
  );
}
