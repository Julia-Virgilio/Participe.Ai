import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator, SafeAreaView, ScrollView} from 'react-native';
import { style } from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';
import { Accordion } from '../../components/Accordion';
import { NavTop } from '../../components/NavTop';
import Logo from '../../assets/logop.png';

 export default function Mapa() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={style.container}>
      <View style={style.boxTop}> 
        <NavTop 
            logo={Logo} 
            iconName='air'
          />
      </View>
      <Text style={ style.textScreen}> Mapa </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Faq')}>
          <Text style={style.textBottom}>
            <Text style={style.textBottomCreate}>  Voltar ao FAQ </Text>
          </Text>
      </TouchableOpacity>     

        <Image
          style={style.image}
          source={require('../../assets/mapa/mapa.png')} 
        />

    </View>
  );
};

