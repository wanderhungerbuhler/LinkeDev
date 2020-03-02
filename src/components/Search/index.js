import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Search({ search }) {
  return (
    <View>
      <TouchableOpacity style={{ position: 'absolute', top: 9, left: 5, zIndex: 1 }}>
        <Feather name="search" size={17} color="rgba(40,62,74,.75)" />
      </TouchableOpacity>

      <TextInput
        style={styles.search}
        placeholder={search}
        placeholderTextColor="rgba(40,62,74,.75)"
      />
    </View>
  );
}

