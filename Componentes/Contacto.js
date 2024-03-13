import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { contactostyles } from './Estilos';

const Contacto = () => {
  return (
    <View style={contactostyles.container}>
      <Text style={contactostyles.title}>Contáctanos</Text>
      <Text style={contactostyles.subtitle}>¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti!</Text>
      <View style={contactostyles.inputContainer}>
        <FontAwesome name="user" size={24} color="#555" style={contactostyles.icon} />
        <TextInput placeholder="Nombre" style={contactostyles.input} />
      </View>
      <View style={contactostyles.inputContainer}>
        <FontAwesome name="envelope" size={24} color="#555" style={contactostyles.icon} />
        <TextInput placeholder="Correo Electrónico" style={contactostyles.input} keyboardType="email-address" />
      </View>
      <View style={contactostyles.inputContainer}>
        <FontAwesome name="comment" size={24} color="#555" style={contactostyles.icon} />
        <TextInput placeholder="Mensaje" style={contactostyles.input} multiline numberOfLines={4} />
      </View>
      <TouchableOpacity style={contactostyles.button} onPress={() => alert('Mensaje enviado')}>
        <Text style={contactostyles.buttonText}>Enviar Mensaje</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contacto;
