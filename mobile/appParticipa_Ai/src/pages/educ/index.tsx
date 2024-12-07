import React  from 'react';
import { Text, TextInput, View, ScrollView, SafeAreaView, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { style } from './styles';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from '../../../global/themes';
import { NavTop } from '../../components/NavTop';
import Logo from '../../assets/logop.png';
import { CardEduc } from '../../components/CardEduc';


export default function Educ() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}> 
        <NavTop 
          logo={Logo} 
          iconName='air'
        />
      </View>
      <Text style={style.textScreen}> Educação </Text>
      <SafeAreaView style={style.safeArea}>
        <ScrollView contentContainerStyle={style.scrollView}>
          <View style={style.cardsContainer}>
            <CardEduc 
              title="água" 
              description="IRRIGAÇÃO AUTOMÁTICA muito MELHOR do que você imagina!" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://youtu.be/WzyPztAnMx4?si=y3RSUE8XjGy_jZXW" 
            />
            <CardEduc 
              title="água" 
              description="10 DICAS para ECONOMIZAR ÁGUA em CASA" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://youtu.be/oVADyHI9GIg?si=v4fJpInVUdgFgoxc"  
            />
            <CardEduc 
              title="energia" 
              description="DESLIGAR GELADEIRA a NOITE ECONOMIZA ENERGIA?" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://youtu.be/ylBUyF9CaY4?si=iz9NoNn3BB7LVjFe"  
            />
            <CardEduc 
              title="energia"
              description="Como economizar ENERGIA ELÉTRICA residencial"
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://youtu.be/TEsWl5JEm9E?si=-tuKcRFZrjMAat0g" 
            />
            <CardEduc 
              title="reciclagem" 
              description="Ideias de DIY: Transformando Lixo em Luxo, Artesanato e Reciclagem" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://youtu.be/kpOqKoEs1Ds?si=JpPW0t4qVqRccogq"  
            />
            <CardEduc 
              title="reciclagem" 
              description="400 Ideias Incríveis de Artesanato e Reciclagem" 
              image="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-cute-planet-earth-png-image_10198178.png" 
              link="https://youtu.be/XbpxtSNA-mc?si=utEDBJ7g_o6q9W2f"  
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
