import { StyleSheet } from "react-native";
import { themas } from "../../../global/themes";


export const style = StyleSheet.create({
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        borderColor:themas.Colors.lighGray,
        backgroundColor:themas.Colors.bgScreen,
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30
    },
    input:{
        // backgroundColor:'red',
        height:'100%',
        width:'100%',
        borderRadius:40,
        // paddingHorizontal:20
    },
    titleInput:{
        marginLeft:5,
        color:themas.Colors.gray,
        marginTop:10
    },
    Icon: {
        width:'100%',
    },
    Buttom: {
        width:'10%',
    }, 
    });