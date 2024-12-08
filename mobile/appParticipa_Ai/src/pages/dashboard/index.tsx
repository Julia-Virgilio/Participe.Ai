
import React from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'; 
import {MaterialIcons} from '@expo/vector-icons'; import { themas } from '../../../global/themes'; 
import { style } from './styles'; 
import { NavTop } from '../../components/NavTop'; 
import Logo from '../../assets/logop.png';


export default function Dashboard() {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <NavTop logo={Logo} iconName='air' />
            </View>
            <Text style={style.textScreen}>DashBoard</Text>
            {/* <Text> Você ainda não tem dados para exibir! ;-;</Text> */}

            <View style={style.card}>
                <Image source={require('../../assets/dashboard/agua.png')}  style={style.cardImage} />
                <View style={style.cardContent}>
                    <Text style={style.cardTitle}> Gestão de<Text style={{ color: 'blue'}}> Água </Text></Text>
                    <Text style={style.cardDescription}>
                        Acompanhe seu consumo de água, receba dicas personalizadas e utilize dispositivos de medição em tempo real!
                    </Text>
                    <TouchableOpacity style={[style.cardButton, { backgroundColor: 'blue'}]} onPress={() => alert('Você ainda não tem dados para exibir!')}>
                        <Text style={style.cardButtonText}>
                            Veja mais 
                            <MaterialIcons name="arrow-circle-right" size={12} color="#fff" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.card}>
                <Image source={require('../../assets/dashboard/energia.png')}  style={style.cardImage} />
                <View style={style.cardContent}>
                    <Text style={style.cardTitle}> Gestão de<Text style={{ color: 'gold'}}> Energia </Text></Text>
                    <Text style={style.cardDescription}>
                        Acompanhe seu consumo de energia, receba dicas personalizadas e utilize dispositivos de medição em tempo real!
                    </Text>
                    <TouchableOpacity style={[style.cardButton, { backgroundColor: 'gold'}]} onPress={() => alert('Você ainda não tem dados para exibir!')}>
                        <Text style={style.cardButtonText}>
                            Veja mais 
                            <MaterialIcons name="arrow-circle-right" size={12} color="#fff" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.card}>
                <Image source={require('../../assets/dashboard/reciclagem.png')}  style={style.cardImage} />
                <View style={style.cardContent}>
                <Text style={style.cardTitle}> Coleta de<Text style={{ color: 'burlywood'}}> Lixo </Text></Text>
                    <Text style={style.cardDescription}>
                        Aprenda e pratique o descarte correto de resíduos! Localize pontos de descarte e aprenda mais sobre o impacto ambiental.
                    </Text>
                    <TouchableOpacity style={[style.cardButton, { backgroundColor: 'burlywood'}]} onPress={() => alert('Você ainda não tem dados para exibir!')}>
                        <Text style={style.cardButtonText}>
                            Veja mais 
                            <MaterialIcons name="arrow-circle-right" size={12} color="#fff" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
