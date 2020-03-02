import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import Profile from '../Profile';
import Search from '../Search';
import ChatSend from '../ChatSend';

export default function Header({ search }) {
  return (
    <View style={styles.header}>
      <Profile />
      <Search search={search} />
      <ChatSend />
    </View>
  );
}
