import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ChatSend() {
  return (
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Feather name="message-square" size={25} color="#fff" />
    </TouchableOpacity>
  );
}
