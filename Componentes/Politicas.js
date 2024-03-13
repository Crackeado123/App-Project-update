import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Politicasstyles } from './Estilos';

const Politicas = () => {
  // Lista de políticas con títulos y descripciones
  const policies = [
    { title: 'Privacidad.', description: 'Para administrar su privacidad, puede usar nuestros servicios de diversas maneras. Por ejemplo, puede registrarse para obtener una Cuenta de Google si desea crear y administrar contenido, como correos electrónicos y fotos, o ver resultados de búsqueda más relevantes. Además, puede usar muchos servicios de Google sin acceder a la cuenta o incluso sin necesidad de crear una, como realizar búsquedas en Google o mirar videos en YouTube. También puede elegir navegar en la Web mediante un modo privado, como el modo Incógnito de Chrome, que mantiene su navegación privada cuando varias personas comparten el mismo dispositivo. Además, en todos nuestros servicios, puede modificar la configuración de privacidad para controlar si recopilamos ciertos tipos de datos y cómo los usamos Para administrar su privacidad, puede usar nuestros servicios de diversas maneras. Por ejemplo, puede registrarse para obtener una Cuenta de Google si desea crear y administrar contenido, como correos electrónicos y fotos, o ver resultados de búsqueda más relevantes. Además, puede usar muchos servicios de Google sin acceder a la cuenta o incluso sin necesidad de crear una, como realizar búsquedas en Google o mirar videos en YouTube. También puede elegir navegar en la Web mediante un modo privado, como el modo Incógnito de Chrome, que mantiene su navegación privada cuando varias personas comparten el mismo dispositivo. Además, en todos nuestros servicios, puede modificar la configuración de privacidad para controlar si recopilamos ciertos tipos de datos y cómo los usamos.' },
    { title: 'Seguridad.', description: 'Esta es la descripción de la política de seguridad.' },
    { title: 'Tecnologías.', description: 'Esta es la descripción de la política de tecnologías.' },
  ];

  // Estados para gestionar la política seleccionada y la visibilidad del modal
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Función para manejar cuando se presiona una política
  const handlePolicyPress = (index) => {
    setSelectedPolicy(index);
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedPolicy(null);
    setModalVisible(false);
  };

  // Componente principal que renderiza la interfaz de usuario
  return (
    <View style={Politicasstyles.container}>
      {/* Título para la sección de políticas */}
      <Text style={Politicasstyles.title}>Políticas de la Aplicación</Text>

      {/* Mapeo de cada política y su representación como elementos táctiles */}
      {policies.map((policy, index) => (
        <TouchableOpacity
          key={index}
          style={Politicasstyles.policyContainer}
          onPress={() => handlePolicyPress(index)}>
         
          {/* Mostrar el título de la política */}
          <Text style={Politicasstyles.policyText}>{policy.title}</Text>
        </TouchableOpacity>
      ))}

      {/* Modal para mostrar las descripciones de las políticas */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={Politicasstyles.modalView}>
          {/* Mostrar el texto de la descripción de la política */}
          <Text style={Politicasstyles.modalTittle}>
            {selectedPolicy !== null ? policies[selectedPolicy].title : ''}
          </Text>
          <Text style={Politicasstyles.modalText}>
            {selectedPolicy !== null ? policies[selectedPolicy].description : ''}
          </Text>
          {/* Botón para cerrar el modal */}
          <Pressable
            style={[Politicasstyles.button, Politicasstyles.buttonClose]}
            onPress={closeModal}>
            <Text style={Politicasstyles.buttonText}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default Politicas;
