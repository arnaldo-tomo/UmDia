import { StyleSheet } from "react-native";

export const register = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    logo: {
        width: "100%",
        height: 90,
        justifyContent: "center",
        alignItems: "center",
    },

    bttun: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 50,
        backgroundColor: "#0095f6",
        borderRadius: 10,
        marginTop: 10,
    },

    btn: {
        color: "#FFF",
        fontWeight: "bold",
        width: "90%",

        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    input: {
        backgroundColor: "#F9F9F8",
        width: "90%",
        height: 50,
        borderRadius: 10,
        shadowRadius: 10,
        shadowColor: "black",
        marginTop: 10,
        padding: 12,
    },
    LineCol: {
        flexDirection: "row",
        marginTop: 6,
        alignItems: "center",
        alignContent: "center",
        width: "90%",
    },
    LineText: {
        padding: 4,
    },
    lineLeft: {
        backgroundColor: "#F9F9F8",
        shadowColor: "black",
        height: 1,
        width: "45%",
    },
    lineRight: {
        backgroundColor: "#F9F9F8",
        height: 1,
        width: "45%",
    },
    redes: {
        flexDirection: "row",
        marginTop: 10,
    },
    apple: {
        marginLeft: 6,
        marginRight: 10,
    },
    jatesb: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    textLogin: {
        padding: 4,
        fontWeight: "bold",
        color: "#0095f6",
    },
    error: {
        width: "90%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        color: "red",
        padding: 2,
    },
});
