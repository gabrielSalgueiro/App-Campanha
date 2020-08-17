import React, { useState, useEffect } from 'react';

import {
  Animated,
  Dimensions,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LoaderModal from '../../modals/loaderModal';

import Logo from '../../assets/Logo/Logo.png';

import styles from './styles';

import {
  ShowUpAnimation,
  keyboardDidHideAnimation,
  keyboardDidShowAnimation,
} from './Animations';

// CONTEXTS
import { useAuth } from '../../contexts/auth';

const { height, width } = Dimensions.get('window');

export default function Login() {
  const { SignIn } = useAuth();

  // ANIMATIONS PROPS
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: height * 0.19 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: width, y: height * 0.2 }));
  const [loaderVisible, setLoaderVisible] = useState(false);

  // NAVIGATION PROPS
  const navigation = useNavigation();

  // STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    SignIn(email, password, setLoaderVisible);
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    KeyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      // eslint-disable-next-line no-use-before-define
      keyboardDidShow
    );
    // eslint-disable-next-line no-undef
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      // eslint-disable-next-line no-use-before-define
      keyboardDidHide
    );

    ShowUpAnimation(offset, opacity);
  }, []);

  function keyboardDidShow() {
    keyboardDidShowAnimation(logo);
  }

  function keyboardDidHide() {
    keyboardDidHideAnimation(logo);
  }

  function forgotPassword() {
    navigation.navigate('Resetar Senha');
  }

  return (
    <View style={styles.container}>
      <LoaderModal visible={loaderVisible} />
      <View>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
            opacity,
          }}
          resizeMode="contain"
          source={Logo}
        />
      </View>

      <Animated.View
        style={
          ([styles.inputContainer],
          {
            opacity,
            transform: [{ translateY: offset.y }],
          })
        }
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={{ ...styles.input, marginTop: 25 }}
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none" // sem a primeira letra maiuscula
          autoCorrect={false}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity onPress={forgotPassword}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.logIn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
