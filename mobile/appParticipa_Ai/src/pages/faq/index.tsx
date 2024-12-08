import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator, SafeAreaView, ScrollView} from 'react-native';
import { style } from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';
import { Accordion } from '../../components/Accordion';
import { NavTop } from '../../components/NavTop';
import Logo from '../../assets/logop.png';

 export default function Faq() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={style.container}>
      <View style={style.boxTop}> 
        <NavTop 
            logo={Logo} 
            iconName='air'
          />
      </View>
      <Text style={ style.textScreen}> Perguntas Frequentes </Text>
    <SafeAreaView>
      <ScrollView >      
        <Accordion
          title="COMO FAÇO PARA ENTRAR EM CONTATO? "
          content="Você pode entrar em contato com a Embasa pelo WhatsApp no número (xx) xxxxx-xxxx,
            onde é possível consultar faturas, solicitar segunda via, relatar problemas e obter outros serviços.
            Outra opção é o SAC pelo telefone xxxx xxx xxxx, que oferece suporte ao consumidor
            para dúvidas e reclamações."
          isOpen={isOpen1}
          onToggle={() => setIsOpen1(!isOpen1)}
        />
        <Accordion
          title="QUAIS SÃO OS TIPOS DE SUPORTE OFERECIDO?"
          content="Este é o conteúdo da seção 2. Pode conter informações detalhadas sobre um tópico específico."
          isOpen={isOpen2}
          onToggle={() => setIsOpen2(!isOpen2)}
        />
        <Accordion
          title="QUAL O TEMPO MÉDIO DE RESPOSTA?"
          content="Este é o conteúdo da seção 3. Use esta seção para compartilhar insights adicionais."
          isOpen={isOpen3}
          onToggle={() => setIsOpen3(!isOpen3)}
        />
        <Accordion
          title="EXISTEM PACOTES OU PLANOS?"
          content="Este é o conteúdo da seção 3. Use esta seção para compartilhar insights adicionais."
          isOpen={isOpen4}
          onToggle={() => setIsOpen4(!isOpen4)}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
            <Text style={ style.textBottomCreate}>
            Clique aqui para ver O MAPA
            </Text>
        </TouchableOpacity>
      </ScrollView>
     
    </SafeAreaView>
    </View>
  );
};

