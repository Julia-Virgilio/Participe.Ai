import React from 'react';
import { View, Image, StyleSheet, ViewProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // ou 'react-native-vector-icons/MaterialIcons'
import { Logo } from '../../assets/logop.png'; // atualize o caminho da logo
import { themas } from '../../../global/themes'; // atualize o caminho do seu themas
import {style} from './styles'; //

type Props = ViewProps & {
  logo: any; // ou o tipo adequado da sua logo
  iconName: keyof typeof MaterialIcons.glyphMap; // Garantindo que iconName seja uma string válida
  iconSize?: number;
  iconColor?: string;
};

export function NavTop({
  logo = Logo, // Valor padrão para logo
  iconName,
  iconSize = 32,
  iconColor = themas.Colors.gray,
  ...rest
}: Props) {
  return (
    <View style={style.corner} {...rest}>
      <Image source={logo} style={style.logo} resizeMode="contain" />
      <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
    </View>
  );
}


