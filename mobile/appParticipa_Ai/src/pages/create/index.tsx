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

export default function Create() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <NavTop 
          logo={Logo} 
          iconName='air'
        />
        {/* Outras partes do seu código */}
      </View>
      <View style={style.boxMid}>
         <Text style={style.text}>
          Crie sua conta no 
          <Text style={{ color: themas.Colors.secondaryText }}> Participa.ai</Text>
        </Text>
      <Text style={ style.textScreen}> CADASTRE-SE </Text>
        <Input 
          value={name}
          onChangeText={setEmail}
          title="Nome"
          IconRight={MaterialIcons}
          //iconRightName= 'email'
        />
        <Input 
          value={email}
          onChangeText={setEmail}
          title="Digite seu email"
          IconRight={MaterialIcons}
          iconRightName= 'email'
        />
        <Input 
          value={password}
          onChangeText={setPassword}
          title="Informe a senha"
          IconRight={Octicons}
          iconRightName= {showPassword ? "eye-closed" : "eye"}
          secureTextEntry= {showPassword}
          onIconRightPress={() =>setShowPassword(!showPassword)}
        />
        <Input 
          value={password}
          onChangeText={setPassword}
          title="Confirme a senha"
          IconRight={Octicons}
          iconRightName= {showPassword ? "eye-closed" : "eye"}
          secureTextEntry= {showPassword}
          onIconRightPress={() =>setShowPassword(!showPassword)}
        />

       <Text style={{ textAlign: 'right' }}>  
        <MaterialIcons name='check-box' size={20} color='green'/>                        Aceitar
         os termos de uso?</Text> 
      </View>   
      
      <View style={style.boxBottom}>
        <View>
          <Button 
            text='Cadastrar'
            loading={loading}
            onPress={() => alert('Ainda não estamos funcionando, em breve, faça login com os dados do readme')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={style.textBottom}>
            Já tem conta? <Text style={style.textBottomCreate}> faça LOGIN</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
