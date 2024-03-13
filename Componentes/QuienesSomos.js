import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Quienesstyles } from './Estilos';

const Quienes = () => {
  const data = [
    {
      id: 1,
      image: require('./img/OsoEmpresa.jpg')
    },
    {
      id: 2,
      image: require('./img/user.jpg')
    },
    {
      id: 3,
      image: require('./img/nn.png')
    },
    {
      id: 4,
      image: require('./img/user.jpg')
    }
  ];

  const renderItem = ({ item }) => (
    <Animatable.View animation="bounceInDown" style={Quienesstyles.item}>
      <Image
        source={item.image}
        style={Quienesstyles.itemImage}
      />
    </Animatable.View>
  );

  return (
    <View style={Quienesstyles.container}>
      <Text style={Quienesstyles.title}>Tropical World</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={Quienesstyles.description}>
        Agregar,mision,vision y algo mas que no recuerdo. Somos una empresa comprometida con la calidad y la innovación. Nuestra misión es proporcionar soluciones
        excepcionales a nuestros usuarios y mejorar constantemente su experiencia.
      </Text>
      <Text style={Quienesstyles.description}>
        Fundada en el año 2024, hemos estado trabajando arduamente para ofrecer los mejores artículos de confianza que marquen la
        diferencia en la vida de las personas.
      </Text>
      <Text style={Quienesstyles.description}>
        ¡Gracias por ser parte de nuestra comunidad y confiar en nosotros para satisfacer tus necesidades!
      </Text>
    </View>
  );
};

export default Quienes;
