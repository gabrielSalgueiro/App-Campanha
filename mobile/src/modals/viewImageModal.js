/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import {
  Modal,
  ImageBackground,
  ActivityIndicator,
  Image,
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

// ICONS
import personIcon from '../assets/Icons/person.png';

const { height, width } = Dimensions.get('window');

export default function ViewImageModal({ visible, image, cancel, name }) {
  const [loading, setLoading] = useState(image !== 'none');

  function starts() {
    setLoading(image !== 'none');
  }

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
            <View>
              <Text style={styles.title}>{name}</Text>
              <ImageBackground
                style={styles.standartAvatar}
                source={personIcon}
              >
                <Image
                  onLoadStart={starts}
                  onLoadEnd={() => setLoading(false)}
                  style={styles.avatar}
                  source={{ uri: image }}
                />
              </ImageBackground>
            </View>

            <ActivityIndicator
              style={styles.activityIndicator}
              animating={loading}
              size="large"
            />
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
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  standartAvatar: {
    alignSelf: 'center',
    backgroundColor: '#FFF8F8',
  },
  title: {
    backgroundColor: '#000000',
    width: 0.9 * width,
    height: 0.05 * height,
    color: '#FFF',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 0.9 * width,
    height: 0.6 * height,
    resizeMode: 'stretch',
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
