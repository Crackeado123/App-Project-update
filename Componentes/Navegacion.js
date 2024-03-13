import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Image, SafeAreaView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Registro from './Registro';
import User from "./img/user.jpg";
import Home from './Home';
import Producto from './Producto';
import { Login } from './Login';
import Productos from './Productos';
import FAQItem from './PreguntasF';
import Contacto from './Contacto'
import Quienes from './QuienesSomos';
import Politicas from './Politicas';
import Bienvenida from './Bienvenida';
import Acercade from './Acercade';

const Stack = createNativeStackNavigator();
const TabsH = createBottomTabNavigator();
const StackP = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Función para el contenido personalizado del drawer
const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#f4f4f4',
          borderBottomWidth: 3,
        }}
      >
        <Image
          source={User}
          style={{
            height: 100,
            width: 100,
            borderRadius: 65,
            marginTop: 30
          }}
        />

        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: 'bold',
            color: '#111',
          }}
        >
          Isabella Joanna
        </Text>


      </View>

      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

// En esta Navegación principal (de login a home) se cambia para poner el otro componente que seria la bienvenida
export const NavHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='bienvenida' component={Bienvenida} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={MiDrawer} options={{ headerShown: false }} />
      <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Navegación de productos a producto detalle
export const StackProductos = () => {
  return (
    <StackP.Navigator>
      <StackP.Screen name='Productos2' component={Productos} options={{ headerShown: false }} />
      <StackP.Screen name='Producto' component={Producto} options={{ headerShown: true }} />
    </StackP.Navigator>
  );
};

// Navegación secundaria (tabs de home) Aqui es el menu de abajo
export const NavTabsHome = () => {
  return (
    <TabsH.Navigator>
      <TabsH.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'blue'} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='list-ul' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='shopping-basket' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

//Aqui es el menu de la izquierda para agregar mas
export const MiDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerLabelStyle: {
          color: '#111',
        },
      }}
    >
      <Drawer.Screen
        name='Principal'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='home' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={NavTabsHome}//Aqui se debe cambiar para llamar a otro componentee
      />

      <Drawer.Screen
        name='Configuracion'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='cog' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={NavTabsHome}
      />
      <Drawer.Screen
        name='Quienes somos'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='group' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={Quienes}
      />
      <Drawer.Screen
        name='Politicas'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='legal' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={Politicas}
      />
      <Drawer.Screen
        name='Dispositivos'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='android' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={NavTabsHome}
      />
      <Drawer.Screen
        name='Ayuda'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='headphones' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={NavTabsHome}
      />
      <Drawer.Screen
        name='Preguntas frecuentes'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='question' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={FAQItem}
      />
      <Drawer.Screen
        name='Contacto'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='phone' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={Contacto}
      />
      <Drawer.Screen
        name='Acerca'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome name='home' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={Acercade}
      />
      <Drawer.Screen
        name='Cerrar sesion'
        options={{
          headerShown: false,
          drawerIcon: () => <FontAwesome name='sign-in' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/OsoEmpresa.jpg')}  // Aqui sera la imagen del logo de la empresa
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={NavHome}
      />
    </Drawer.Navigator>
  );
};
