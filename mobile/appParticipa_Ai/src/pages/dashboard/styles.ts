import {Dimensions, StyleSheet} from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
       // paddingTop: 80,
    },
    boxTop:{
        height:Dimensions.get('window').height/5,
        width:'100%',
        // backgroundColor:'red',

    },
        textScreen:{
            fontSize: 28,
            color:themas.Colors.primaryText,
            fontWeight:'bold',
            paddingTop: 10,
        },
        card: {
            flexDirection: 'row',
            padding: 5,
            backgroundColor: '#f0f0f0',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5,
            marginVertical: 3,
            marginHorizontal: 15,
            paddingTop: 10,
        },
        cardImage: {
            width: 80,
            height: 80,
            marginRight: 10,
        },
        cardContent: {
            flex: 1,
            justifyContent: 'space-between',
        },
        cardTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        cardDescription: {
            fontSize: 14,
            color: '#555',
            marginBottom: 10,
        },
        cardButton: {
            alignSelf: 'flex-end',
            backgroundColor: '#007bff',
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
        },
        cardButtonText: {
            color: '#fff',
        },
});