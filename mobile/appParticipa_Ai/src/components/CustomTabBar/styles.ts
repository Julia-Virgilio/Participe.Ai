import { StyleSheet } from "react-native";
import { themas } from "../../../global/themes";


export const style = StyleSheet.create({
    tabArea: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
});