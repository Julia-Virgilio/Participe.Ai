import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        paddingTop: 10,
        // backgroundColor:'red',

    },
    boxMid:{
        height:Dimensions.get('window').height/3,
        // backgroundColor:'blue',
        width:'100%',
        paddingHorizontal:37,
    },
    boxBottom:{
        height:Dimensions.get('window').height/2,
        // backgroundColor:'green',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop: 70,
        
    },
  
    text:{
        marginTop:35,
        fontSize:18,
        fontWeight:'bold'
    },
   
    boxIcon:{
        width:50,
        height:50,
        backgroundColor:'red'
    },
  
    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.Colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold'
    },
    textBottom:{
        fontSize:16,
        color:themas.Colors.gray,
        paddingTop: 60,
    },
    textBottomCreate:{
        fontSize:16,
        color:themas.Colors.secondaryText
    },
    textScreen:{
        fontSize:32,
        color:themas.Colors.primaryText,
        fontWeight:'bold'
    },
})