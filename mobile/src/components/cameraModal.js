import React, { useState, useEffect } from 'react';
import { Modal,  View, TextInput, Dimensions, Text, StyleSheet, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

let {height, width} = Dimensions.get('window');


export default function CameraModal({visible, camera, save, cancel}){

    // Reseta os states e fecha o modal
    function resetAndClose(){
      cancel()
    }

    return (
      
        <Modal
          statusBarTranslucent={true}
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={resetAndClose}
        >
          <TouchableOpacity
            style={styles.centeredView}
            activeOpacity={1} 
            onPressOut={resetAndClose}
          >
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <TouchableOpacity>
                    <Text>Remover Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Galeria</Text>
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
      backgroundColor: '#000000aa',
      justifyContent: 'flex-end',
    },
    modalView: {
      backgroundColor:'#fff',
      borderTopStartRadius: 10,
      borderTopEndRadius: 10,
      padding: 35,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    labelText:{
      marginTop: 10,
      alignSelf: 'flex-start',
      color: '#FFFCFC',
      fontSize: 12,
    },
    inputBox:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 4,
      backgroundColor: '#FFFCFC',
      borderWidth: 1,
      borderColor: '#003D5C',
      borderRadius: 3,
    },
    eyeButton:{
      justifyContent: 'center',
    },
    infoInput:{
        alignSelf: 'stretch',
        paddingHorizontal: 0.03*width, // padding entre o texto e o inicio da box
        color: '#7D7D7D',
        fontSize: 14,
        width: '90%'
    },
    buttonsView:{
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    saveButton:{
      marginTop: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFCFC',
      borderRadius: 5,
      borderWidth: 0.5,
      width: 120,
      height: 30
    },
    saveText:{
      textAlign: 'center',
      color: '#003D5C',
      fontSize: 12,
    }
  });