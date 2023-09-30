import AsyncStorage from "@react-native-async-storage/async-storage"
import login from '../../screens/auth/login';
import { View, Text, TouchableOpacity } from 'react-native';

import { InicioStyle } from "./style";
export default function Inicio({ navigation }) {
    const logout = () => {
        console.log("Logout");
        AsyncStorage.removeItem('token');

    }
    return (
        <View style={InicioStyle.container}>
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}