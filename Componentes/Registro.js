import React, { useState } from 'react';
import { View, Alert, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { registroStyles } from './Estilos';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Registro = () => {
    const nav = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [numero, setNum] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRegistro = () => {
        // Construir el objeto de datos a enviar al servidor
        const data = {
            nombre: username,
            correo: email,
            pass: password,
            telefono: numero,
        };

        // Hacer la solicitud al servidor
        fetch('http://192.168.1.73:4000/usuarios', { // Cambia la URL según la dirección de tu servidor
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            Alert.alert('Registro exitoso', 'Te has registrado correctamente');
        })
        .catch(error => {
            console.error('Error al registrar:', error);
            Alert.alert('Error', 'Ocurrió un error al intentar registrarte. Por favor, intenta de nuevo.');
        });
    };

    return (
        <ImageBackground
            source={require('./img/UnFondo.jpg')}
            style={registroStyles.backgroundImage}
        >
            <View style={registroStyles.container}>
                <View style={registroStyles.container2}>
                    <FontAwesome name='user-plus' size={100} color='#3498db' style={registroStyles.icon} />
                    <Text style={registroStyles.title}>Registro</Text>
                    <Text style={registroStyles.label}>Nombre de usuario</Text>
                    <TextInput
                        style={registroStyles.input}
                        placeholder='Nombre de usuario'
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                    <Text style={registroStyles.label}>Correo electrónico</Text>
                    <TextInput
                        style={registroStyles.input}
                        placeholder='Correo electrónico'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        keyboardType='email-address'
                    />
                    <Text style={registroStyles.label}>Numero de Teléfono</Text>
                    <TextInput
                        style={registroStyles.input}
                        placeholder='Numero de Teléfono'
                        value={numero}
                        onChangeText={text => setNum(text)}
                        keyboardType='phone-pad'
                    />
                    <Text style={registroStyles.label}>Contraseña</Text>
                    <View style={registroStyles.input}>
                        <TextInput
                            style={registroStyles.passwordInput}
                            placeholder='Contraseña'
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <TouchableOpacity onPress={toggleShowPassword}>
                            <Animatable.View animation="bounceIn" style={registroStyles.passwordIcon}>
                                <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color='black' />
                            </Animatable.View>
                        </TouchableOpacity>
                    </View>
                    <Button title='Registrar' onPress={handleRegistro} />

                    <TouchableOpacity onPress={() => nav.navigate('Home')}>
                        <Text style={registroStyles.link}>Ingresar como invitado</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Registro;
