import React from 'react';
import { TouchableOpacity,  View, ScrollView, Text, Image, ViewProps, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Note: using @expo/vector-icons includes MaterialIcons
import { style } from './styles';


type Props = ViewProps & {
  title: string;
  description: string;
  image: string;
  link: string;
};

export function CardEduc({ title, description, image, link, ...rest }: Props) {
  const handlePress = () => {
    Linking.openURL(link).catch(err => console.error('Erro ao abrir o link:', err));
  };

  return (
    <View style={style.card} {...rest}>
      <Image source={{ uri: image }} style={style.image} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.description}>{description}</Text>
      <TouchableOpacity style={style.button} onPress={handlePress}>
        <Text style={style.buttonText}>Saiba Mais</Text>
        <MaterialIcons
          name="arrow-forward"
          size={10}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}