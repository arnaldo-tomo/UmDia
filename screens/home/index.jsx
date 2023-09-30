import { TouchableOpacity, View, Text, Button } from "react-native"
import { HomePageStyle } from "./style"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
export const HomePage = ({ navigation }) => {
    const [nome, setNome] = useState()

    const recuperarObjetoDoAsyncStorage = async () => {
        try {
            const objetoSerializado = await AsyncStorage.getItem('token');
            const objetoRecuperado = JSON.parse(objetoSerializado);
            setNome(objetoRecuperado.token);
        } catch (error) {
            console.log(error.email);
        }
    }


    const logout = () => {
        AsyncStorage.removeItem('token');
        console.log("Logout");

    }

    return (
        <View style={HomePageStyle.container}>

            <TouchableOpacity onPress={recuperarObjetoDoAsyncStorage} >
                <Text> Nome {nome} </Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={logout}>

                <Text> Logout </Text>
            </TouchableOpacity>
        </View>
    )
}