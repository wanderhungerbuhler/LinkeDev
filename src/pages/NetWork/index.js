import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function NetWork() {

  return (
    <View>
      <TouchableOpacity style={styles.boxNetWork}>
        <Text style={styles.titleNetWork}>Gerenciar minha rede</Text>
        <Feather name="arrow-right" size={15} color="#89909A" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxNetWork}>
        <Text style={styles.titleNetWork}>Convites</Text>
        <Feather name="arrow-right" size={15} color="#89909A" />
      </TouchableOpacity>
    </View>
  );
}
