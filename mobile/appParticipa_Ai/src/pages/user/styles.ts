import {Dimensions, StyleSheet} from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        // backgroundColor:'red',
     
    },
        textScreen:{
            fontSize: 28,
            color:themas.Colors.primaryText,
            fontWeight:'bold',
            
        
        },
});