import {Dimensions, StyleSheet} from "react-native";
import { themas } from "../../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        paddingTop: 1,
      },
      safeArea: {
        flex: 1,
       // backgroundColor: themas.Colors.secondaryText,
        width: '100%',
      },
      scrollView: {
       // padding: 10,
        width: '100%',
      },
      boxTop: {
        height: Dimensions.get('window').height / 5,
        width: '100%',
      },
      textScreen: {
        fontSize: 28,
        color: themas.Colors.primaryText,
        fontWeight: 'bold',
      },
      cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
       }
    //   card: {
    //     width: '30%',
    //     borderWidth: 1,
    //     borderColor: '#ddd',
    //     borderRadius: 8,
    //     overflow: 'hidden',
    //     marginBottom: 16,
    //     backgroundColor: '#fff',
    //   },
    //   image: {
    //     width: '100%',
    //     height: 150,
    //   },
    //   title: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     margin: 16,
    //   },
    //   description: {
    //     fontSize: 14,
    //     color: '#333',
    //     marginHorizontal: 16,
    //     marginBottom: 16,
    //   },
    //   button: {
    //     backgroundColor: '#007BFF',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     padding: 12,
    //     borderBottomLeftRadius: 8,
    //     borderBottomRightRadius: 8,
    //   },
    //   buttonText: {
    //     color: '#fff',
    //     fontSize: 16,
    //     marginRight: 8,
    //   },
    });
    