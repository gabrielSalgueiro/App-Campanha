import React from 'react';
import { Modal,  View, Dimensions, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

let {height, width} = Dimensions.get('window');

export default function LoaderModal({visible, text='Autenticando...'}){

    return (
      <Modal
      statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        visible={visible}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Text style={styles.loaderText}>{text}</Text>
            <LottieView 
                source={require("../9764-loader.json")} 
                autoPlay
                loop
                style={styles.loader}
            />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>

    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 2,
        backgroundColor: '#000000aa',

    },
    modalView: {
        paddingVertical: 20, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        width: width*0.8,
        height: 0.12 * height,
        borderRadius: 10,
    },
    loader:{
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    loaderText:{
        alignSelf: 'center',
        fontSize: 18,
        color: '#F79839',
        fontWeight: 'bold',

    }
  });