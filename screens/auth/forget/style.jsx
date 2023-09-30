import { StyleSheet } from "react-native";
export const forget = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
    },
    logo: {
        width: "90%",
        height: 60,
    },
    TextInput: {
        backgroundColor: "#F9F9F9",
        width: "90%",
        height: 50,
        padding: 6,
        borderRadius: 6,
        marginTop: 10,
    },

    tuch: {
        backgroundColor: "#0095f6",
        borderRadius: 6,
        width: "90%",
        height: 50,
        alignContent: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    btn: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    },
    label: {
        color: "#F9F9F9",
        width: "90%",
        marginTop: 6,
        flexDirection: "row",
        alignItems: "center",
    },
    labelText: {
        fontWeight: "500",
        fontSize: 16,
        // padding: 6,
        paddingLeft: 4,
    },
    firstText: {
        width: "90%",
        padding: 2,
        marginBottom: 2,
        fontSize: 14,
    },
});
