// https://www.youtube.com/watch?v=A5yIPclvjJk&list=PLN5FV-HmjCA8UKWLep7O31PtQYqML8-Wd&ab_channel=CaioeduardoDev
import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { style } from './styles';
import Logo from '../../assets/logop.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from '../../../global/themes';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NavTop } from '../../components/NavTop';

export default function User() {
  return (
    
      <View style={style.container}>
          <View style={style.boxTop}> 
              <NavTop 
                  logo={Logo} 
                  iconName='air'
              />
          </View>
          <Text style={ style.textScreen}> User </Text>

           <Image source={require('../../assets/dashboard/aviso_construcao.png')}  />
           <Text> 
               Tela User sair 
           </Text>
      </View>

   )
}    