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

// ICONS
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function ImagePickerModal({
  visible,
  openCamera,
  openGallery,
  deleteImage,
  cancel,
}) {
  return (
    <Modal
      statusBarTranslucent
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={cancel}
    >
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={cancel}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{ ...styles.button }}
              onPress={deleteImage}
            >
              <FontAwesome name="trash" size={36} color="red" />
              <Text style={{ ...styles.labelText, color: 'red' }}>
                Remover Foto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.button}
              onPress={openCamera}
            >
              <FontAwesome5 name="camera" size={28} color="#003D5C" />
              <Text style={styles.labelText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={openGallery}>
              <FontAwesome name="image" size={28} color="#003D5C" />
              <Text style={styles.labelText}>Galeria</Text>
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
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#FFFCFC',
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width,
    height: 0.07 * height,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 0.05 * width,
  },
  labelText: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#003D5C',
  },
});
