import { NativeBaseProvider } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect } from "react";
import { LoginStyle } from "./style";

export default LoginSscrewn = ({ navigation }) => {
    useEffect(() => {
        recuperarObjetoDoAsyncStorage();
    }, [])


    const recuperarObjetoDoAsyncStorage = async () => {
        try {
            const objetoSerializado = await AsyncStorage.getItem('token');
            if (objetoSerializado !== null) {

                const objetoRecuperado = JSON.parse(objetoSerializado);
                console.log('Objeto recuperado do AsyncStorage:', objetoRecuperado);
                return objetoRecuperado;
            } else {
                console.log('Nenhum objeto encontrado para a chave no AsyncStorage');
                return null;
            }
        } catch (error) {
            console.error('Erro ao recuperar objeto do AsyncStorage:', error);
            return null;
        }
    }

    return (
        <View style={LoginStyle.container}>

            <Image
                source={require("../../../assets/tabnine-logo.png")}
                style={LoginStyle.logo}
            />

            <TextInput
                placeholder="Phone number, username or email"
                style={LoginStyle.password}
            />

            <TextInput placeholder="Password" style={LoginStyle.password} />

            <View style={LoginStyle.forget}>
                <TouchableOpacity onPress={() => navigation.push("ForgetPassword")}>
                    <Text style={LoginStyle.forgetTexte}>Esqueceu a senha.?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={LoginStyle.button}
                onPress={() => navigation.navigate("Inicio")}
            >
                <Text style={LoginStyle.TextInput}>Acessar</Text>
            </TouchableOpacity>



            <View style={LoginStyle.orlog}>
                <Text style={LoginStyle.lineLeft}></Text>
                <Text style={LoginStyle.textOu}>Or</Text>
                <Text style={LoginStyle.lineRight}></Text>
            </View>
            <Text style={LoginStyle.entrar}>Entrar com redes socias</Text>
            <View style={LoginStyle.btn}>
                <Image source={require("../../../assets/google.png")} />
                <Image
                    source={require("../../../assets/apple.png")}
                    style={LoginStyle.apple}
                />
                <Image source={require("../../../assets/facebook.png")} />
            </View>

            <View style={LoginStyle.donthave}>
                <Text>Nao tens conta ainda?</Text>
                <TouchableOpacity onPress={() => navigation.push("Register")}>
                    <Text style={LoginStyle.register}>Registar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}