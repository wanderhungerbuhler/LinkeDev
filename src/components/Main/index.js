import React from 'react';
import { View } from 'react-native';

import Header from '../Header';

import NetWork from '../../pages/NetWork';

export default function Main({ route, navigation }) {

  if (route.name == 'Início') {
    return (
      <View>
        <Header search="Pesquisar" />
      </View>
    );
  } else if (route.name == 'Minha rede') {
    return (
      <View>
        <Header />
        <NetWork />
      </View>
    );
  } else if (route.name == 'Publicação') {
    return (
      <View>
        <Header />
      </View>
    );
  } else if (route.name == 'Notificações') {
    return (
      <View>
        <Header />
      </View>
    );
  } else if (route.name == 'Vagas') {
    return (
      <View>
        <Header search="Pesquise por cargo, palavra chave ou empres..." />
      </View>
    );
  }
}
