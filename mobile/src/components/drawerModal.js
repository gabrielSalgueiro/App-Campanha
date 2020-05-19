import React, { useState, useEffect } from 'react';
import { Modal,  View, TextInput, Dimensions, Text, StyleSheet, TouchableWithoutFeedback,  TouchableOpacity} from 'react-native';
let {height, width} = Dimensions.get('window');

export default function DrawerModal({visible, editProfile, changePassword, close}){

    return (
      <Modal
      statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
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
            <TouchableOpacity onPress={editProfile} style={styles.button}>
              <Text style={styles.labelText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={changePassword} style={styles.button} >
                <Text style={styles.labelText}>Trocar Senha</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>

    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      marginTop: 4,
      alignItems: 'flex-end',
      marginRight: 2

    },
    modalView: {
      justifyContent: 'flex-start',
      backgroundColor:'#003D5C',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10
    },
    button:{
      marginHorizontal: 35,
      marginVertical: 10,
    },
    labelText:{
      alignSelf: 'center',
      color: '#FFFCFC',
      fontSize: 12,
    },
  });