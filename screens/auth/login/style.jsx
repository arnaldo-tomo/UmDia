import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECUNDARY_COLOR, WIGTH, HEIGHT, FONT_SIZE, FONT_WEIGHT } from "../../../config/index"



export const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },

    password: {
        backgroundColor: "#F9F9F9",
        width: "90%",
        height: 50,
        borderRadius: 10,
        shadowRadius: 10,
        shadowColor: "black",
        marginTop: 10,
        padding: 12,
    },

    logo: {
        width: "90%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 100,
    },

    button: {
        marginTop: 20,
        backgroundColor: "#0095f6",
        width: "90%",
        height: 50,
        borderRadius: 10,
        shadowRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        textDecorationColor: "#FFF",
    },

    TextInput: {
        alignContent: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 17,
    },
    forget: {
        width: "90%",
        paddingTop: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgetTexte: {
        color: "#0095f6",
        fontWeight: "normal",
    },

    orlog: {
        marginTop: 20,
        height: 20,
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    lineLeft: {
        backgroundColor: "#F9F9F8",
        width: "40%",
        height: 2,
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },
    lineRight: {
        backgroundColor: "#F9F9F9",
        width: "40%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        height: 2,
    },
    textOu: {
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "normal",
        fontSize: 16,
        paddingStart: 10,
        paddingEnd: 10,
    },
    btn: {
        flexDirection: "row",
        padding: 6,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    apple: {
        marginLeft: 10,
        marginRight: 10,
    },
    entrar: {
        margin: 6,
    },
    donthave: {
        position: "relative",
        width: "90%",
        justifyContent: "center",
        flexDirection: "row",
        // paddingTop: "50%",
    },
    register: {
        fontWeight: "bold",
        color: "#0095f6",
        paddingLeft: 2,
    },
});
