import React from 'react';
import { loginStyles } from './Estilos';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export const Login = () => {
  const nav = useNavigation();

  const handleRegisterLink = () => {
  };

  const handleForgotPasswordLink = () => {
  };

  const ingresarComoInvitado = () => {
  };

  return (
    <ImageBackground
          source={require('./img/UnFondo.jpg')} 
      style={loginStyles.backgroundImage}
    >
      <View style={loginStyles.container}>
        <View style={loginStyles.container2}>
        <FontAwesome name='user' size={100} color='#3498db' style={loginStyles.icon} />

          <Text style={loginStyles.title}>Iniciar sesión</Text>
          <Text style={loginStyles.label}>Usuario</Text>
          <TextInput
            style={loginStyles.input}
            placeholder='Ingresa tu Usuario'
            autoComplete='off'
          />
          <Text style={loginStyles.label}>Contraseña</Text>
          <TextInput
            style={loginStyles.input}
            placeholder='Ingresa tu contraseña'
            cursorColor='red'
            secureTextEntry={true}
          />
          <Button title='Iniciar sesión' onPress={() => nav.navigate('Home')} />

          <TouchableOpacity onPress={handleForgotPasswordLink}>
            <Text style={loginStyles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegisterLink}>
            <Text onPress={() => nav.navigate('Registro')} style={loginStyles.link}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ingresarComoInvitado}>
            <Text onPress={() => nav.navigate('Home')} style={loginStyles.link}>Ingresar como invitado</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
