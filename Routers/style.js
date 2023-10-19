import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SPANCING } from "../config/themas";
const { width } = Dimensions.get('screen')
export const style = StyleSheet.create({
    tabBar: {
        backgroundColor: '#1F212C',
        color: "#FFF",
        bottom: 20,
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 10,
        overflow: 'hidden',
        position: 'absolute'
    }, home: {
        textDecorationColor: 'red',
        color: 'red',
    }
})