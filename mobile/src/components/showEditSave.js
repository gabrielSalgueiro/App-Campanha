import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../globalStyles';

export default function ShowEditSave({ show, onPress, type }) {
  if (show === false) {
    return <View style={globalStyles.hideEditSaveButton} />;
  }
  if (type === 'save') {
    return (
      <TouchableOpacity onPress={onPress} style={globalStyles.editSaveButton}>
        <MaterialIcons name="check" color="#003D5C" size={28} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.editSaveButton}>
      <MaterialIcons name="edit" color="#003D5C" size={28} />
    </TouchableOpacity>
  );
}
