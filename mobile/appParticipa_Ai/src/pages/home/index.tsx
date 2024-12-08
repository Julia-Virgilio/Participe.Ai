import React  from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from './styles';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';


export default function Home() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
              <Text> 
                 Tela Home 
             </Text>
        </View>
 
     )
 }    