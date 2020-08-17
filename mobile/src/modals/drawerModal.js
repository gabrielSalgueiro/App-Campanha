/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Modal,
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function DrawerModal({
  visible,
  editProfile,
  changePassword,
  close,
}) {
  return (
    <Modal
      statusBarTranslucent
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={close}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={close}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={editProfile}
              style={styles.button}
            >
              <Text style={styles.labelText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={changePassword}
              style={styles.button}
            >
              <Text style={styles.labelText}>Trocar Senha</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 2,
  },
  modalView: {
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    width: 0.35 * width,
    height: 0.05 * height,
    backgroundColor: '#003D5C',
    justifyContent: 'center',
    paddingHorizontal: 0.05 * width,
  },
  labelText: {
    alignSelf: 'center',
    color: '#FFFCFC',
    fontSize: 12,
  },
});
