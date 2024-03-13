import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Bienvenida = () => {
  const nav = useNavigation();
  const animatedViewRef = useRef(null);

  useEffect(() => {
    // Iniciar la animación cuando el componente se monta
    startAnimation();

    // Configurar un intervalo para repetir la animación cada 5 segundos (ajusta según sea necesario)
    const intervalId = setInterval(() => {
      startAnimation();
    }, 5000);

    // Limpiar el intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, []);

  const startAnimation = () => {
    // Comprueba si la referencia al componente animado existe antes de iniciar la animación
    if (animatedViewRef.current) {
      animatedViewRef.current.bounce(800);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Animatable.Image
          ref={animatedViewRef}
          source={require('./img/OsoEmpresa.jpg')}
          style={styles.logo}
        />
        <Text style={styles.description}>¡Bienvenido!</Text>
        <Text style={styles.description}>Explora y descubre artículos para bebé emocionantes al mejor precio</Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => console.log('Ir a Login')}>
          <Text onPress={() => nav.navigate('Login')} style={styles.ctaText}>Empezar Ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor:'green'
  },
  centeredContent: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color:'white'
  },
  ctaButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  ctaText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Bienvenida;
