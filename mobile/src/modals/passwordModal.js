import React, { useState, useEffect } from 'react';
import { Modal,  View, TextInput, Dimensions, Text, StyleSheet, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

let {height, width} = Dimensions.get('window');


export default function PasswordModal({visible, password, save, cancel}){

  // STATES
    const [currentPassword,setCurrentPassword] = useState('')
    const [wrongCurrentPassword, setWrongCurrentPassword] = useState(false)
    const [newPassword,setNewPassword] = useState('')
    const [newPassword2,setNewPassword2] = useState('')
    const [wrongNewPassword, setWrongNewPassword] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [securePassword, setSecurePassword] = useState(true)

    function passwordView(){
      if(showPassword === false){
        setShowPassword(true)
        setSecurePassword(false)
      }else{
        setShowPassword(false)
        setSecurePassword(true)
      }
    }

    // Reseta os states e fecha o modal
    function resetAndClose(){
      
      setCurrentPassword('')
      setNewPassword('')
      setNewPassword2('')
      setSecurePassword(true)
      setShowPassword(false)
      setWrongCurrentPassword(false)
      setWrongNewPassword(false)
      cancel()
    }
    // VERIFICANDO AS SENHAS
    function verifyPassword(){
      if((currentPassword === '')
        || (newPassword === '')
        || (newPassword2 === '')){
          console.log("Preencha todos os campos!")
          setWrongCurrentPassword(true)
          setWrongNewPassword(true)
      }else{
        if(currentPassword === password){
          if(newPassword === newPassword2){
            if(newPassword != currentPassword){
              save(newPassword)
            }else{
              console.log("As senhas nova e atual devem ser diferentes!")
              setWrongNewPassword(true)
              setWrongCurrentPassword(true)
            }
          }else{
            console.log("Digite corretamente a nova senha!")
            setWrongNewPassword(true)
          }
        }else{
          console.log("Senha atual incorreta!")
          setWrongCurrentPassword(true)
        }
      }
      
    }

    return (
        <Modal
          statusBarTranslucent={true}
            animationType="fade"
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
                
                <Text style={styles.labelText}>Senha Atual:</Text>
                <View style={wrongCurrentPassword===false? 
                  styles.inputBox: {...styles.inputBox, borderWidth: 1.5, borderColor: 'red'}}>
                  <TextInput
                    secureTextEntry={securePassword}
                    autoCapitalize="none" // sem a primeira letra maiuscula
                    autoCorrect={false}   //sem corretor
                    style = {styles.infoInput}
                    value={currentPassword}
                    onChangeText={currentPassword => setCurrentPassword(currentPassword)}
                  />
                  <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
                    <MaterialCommunityIcons 
                      name={showPassword===false?"eye":"eye-off"}
                      size={20}
                    />
                  </TouchableOpacity>
                  
                </View>
                <Text style={styles.labelText}>Nova Senha:</Text>
                <View 
                style={wrongNewPassword===false? 
                  styles.inputBox: {...styles.inputBox, borderWidth: 1.5 ,borderColor: 'red'}}
                >
                  <TextInput
                    secureTextEntry={securePassword}
                    autoCapitalize="none" // sem a primeira letra maiuscula
                    autoCorrect={false}   //sem corretor
                    style = {styles.infoInput}
                    value={newPassword}
                    onChangeText={newPassword => setNewPassword(newPassword)}
                  />
                  <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
                    <MaterialCommunityIcons 
                      name={showPassword===false?"eye":"eye-off"}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                
                <Text style={styles.labelText}>Repetir Nova Senha:</Text>
                <View style={wrongNewPassword===false? 
                  styles.inputBox: {...styles.inputBox, borderWidth: 1.5 ,borderColor: 'red'}}>
                  <TextInput
                    secureTextEntry={securePassword}
                    autoCapitalize="none" // sem a primeira letra maiuscula
                    autoCorrect={false}   //sem corretor
                    style = {styles.infoInput}
                    value={newPassword2}
                    onChangeText={newPassword2 => setNewPassword2(newPassword2)}
                  />
                  <TouchableOpacity onPress={passwordView} style={styles.eyeButton}>
                    <MaterialCommunityIcons 
                      name={showPassword===false?"eye":"eye-off"}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonsView}>
                  <TouchableOpacity onPress={resetAndClose}style={styles.saveButton}>
                        <Text style={styles.saveText}>Cancelar</Text>
                    </TouchableOpacity>
                  <TouchableOpacity onPress={verifyPassword}style={styles.saveButton}>
                        <Text style={styles.saveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
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
      justifyContent: 'center',
    },
    modalView: {
      backgroundColor:'#003D5C',
      marginHorizontal: 40,
      borderRadius: 10,
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