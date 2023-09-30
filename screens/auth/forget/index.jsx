import { View, Text, StatusBar, Image, TextInput, TouchableOpacity } from "react-native";
import { forget } from "./style";
import { Ionicons } from "@expo/vector-icons";
export default function ForgetPassword() {
    return (
        <View style={forget.container}>
            {/* <StatusBar /> */}
            <Image
                source={require("../../../assets/tabnine-logo.png")}
                style={forget.logo}
            />

            <View style={forget.label}>
                <Ionicons name="mail" size={16} />
                <Text style={forget.labelText}>E-mail</Text>
            </View>
            <TextInput
                placeholder="Digite seu endereço de e-mail"
                style={forget.TextInput}
            />
            <View style={forget.tuch}>
                <TouchableOpacity>
                    <Text style={forget.btn}>
                        ENVIAR LINK PARA REDEFINIR SENHA POR E-MAIL
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
