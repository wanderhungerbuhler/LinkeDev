import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

/* COMPONENTS */
import Main from './components/Main';
import Header from './components/Header';

/* PAGES */
import NetWork from './pages/NetWork';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function Routes({ inicio }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Minha rede') {
              iconName = focused ? 'users' : 'users';
            } else if (route.name === 'Publicação') {
              iconName = focused ? 'plus-circle' : 'plus-circle';
            } else if (route.name === 'Notificações') {
              iconName = focused ? 'bell' : 'bell';
            } else if (route.name === 'Vagas') {
              iconName = focused ? 'briefcase' : 'briefcase';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0079b8',
          inactiveTintColor: '#89909A',
        }}
      >
        <Tab.Screen name="Início" component={Main} />
        <Tab.Screen name="Minha rede" component={Main} />
        <Tab.Screen name="Publicação" component={Main} />
        <Tab.Screen name="Notificações" component={Main} />
        <Tab.Screen name="Vagas" component={Main} />
      </Tab.Navigator>


    </NavigationContainer>
  );
}
