import React from "react";
import {  TouchableHighlightProps, TouchableOpacity, Text, View} from "react-native";
import { style } from './styles';
import { AntDesign, MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from '../../../global/themes';


export default ({ state, navigation }: any)=>{ 
    const go=((screenName:string)=>{
        navigation.navigate(screenName);
    })
    return (
       <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go('Dashboard')}>
                <MaterialIcons
                    name="insights"
                    style={{opacity:state.index===0?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={()=>go('Educ')}>
                <MaterialIcons
                    name="content-paste"
                    style={{opacity:state.index===1?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={()=>go('Faq')}>
                <MaterialIcons
                    name="info-outline"
                    style={{opacity:state.index===2?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>  
                                        
            <TouchableOpacity style={style.tabItem} onPress={()=>go('User')}>
                <MaterialIcons
                    name="person-outline"
                    style={{opacity:state.index===3?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>                
                          
       </View>        
    );
}

