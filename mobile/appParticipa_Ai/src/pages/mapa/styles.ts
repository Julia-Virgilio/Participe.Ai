import {Dimensions, StyleSheet} from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        paddingTop: 1,
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        // backgroundColor:'red',

    },
    textBottom:{
        fontSize:16,
        color:themas.Colors.gray
    },
    textBottomCreate:{
        fontSize:16,
        color:themas.Colors.secondaryText
    },
    textScreen:{
        fontSize: 28,
        color:themas.Colors.primaryText,
        fontWeight:'bold',

    },
    image: {
        width: Dimensions.get('window').width,
        height: '55%',
        resizeMode: 'stretch', // use 'cover' ou 'stretch' conforme necessário
    },
});