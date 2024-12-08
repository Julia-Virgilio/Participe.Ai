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

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [email, setEmail] = useState('email@test.com');
  const [password, setPassword] = useState('1234');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        setLoading(false);
        return Alert.alert('Atenção', 'Campos obrigatórios');
      }  

      setTimeout(() => {
        try {
          if (email === 'email@test.com' && password === '1234') {
            console.log('Logado com sucesso :D');
            Alert.alert('Logado com sucesso :D');
            navigation.navigate('BottomRoutes'); //mudar para a tela desejada
           //return navigation.reset({routes:[{name :'BottomRoutes'}]});
          } else {
            Alert.alert('Atenção', 'Usuário não encontrado');
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, 3000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

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
          Seja bem vindo ao 
          <Text style={{ color: themas.Colors.secondaryText }}> Participa.ai</Text>
        </Text>
      <Text style={ style.textScreen}> Entrar </Text>
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
       <Text style={{ textAlign: 'right' }}>Esqueceu a senha?</Text> 
      </View>   
      {/* <Text> </Text>       <Text> </Text>  <Text></Text> <Text></Text> */}

      <View style={style.boxBottom}>
        <View>
          <Button 
            text='Entrar'
            loading={loading}
            onPress={() => getLogin()}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Text style={style.textBottom}>
            Não tem conta? <Text style={style.textBottomCreate}>Crie agora</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
