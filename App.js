import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavHome } from './Componentes/Navegacion';
import { appStyles } from './Componentes/Estilos';

export default function App() {
  return (
    <NavigationContainer>
      <View style={appStyles.container}>
        <NavHome />
      </View>
    </NavigationContainer>
  );
}
