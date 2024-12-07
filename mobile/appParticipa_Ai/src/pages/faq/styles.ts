import {Dimensions, StyleSheet} from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
        paddingTop: 110,
    },
    boxTop:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        // backgroundColor:'red',

    },
    textBottomCreate:{
        fontSize:16,
        color:themas.Colors.secondaryText,
        marginTop: 20,
        marginBottom: 20,
        textAlign:'center'
    },
        textScreen:{
            fontSize: 28,
            color:themas.Colors.primaryText,
            fontWeight:'bold'
        },
});