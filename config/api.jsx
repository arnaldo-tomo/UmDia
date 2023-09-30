import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";
export const API_URL = "http://192.168.79.54:8084/";

const simpleAlertHandler = () => {
    Alert.alert(
        'O e-mail já foi Cadastrado ',
        'Email ou palavra passe incorreta',
    );
};

export const promax = (values) => {
    axios.post(API_URL + 'api/register/', {
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
    })
        .then(function (response) {
            console.log(response.data);
            const objetoSerializado = JSON.stringify(response.data);
            AsyncStorage.setItem('token', objetoSerializado);
        })
        .catch(function (error) {
            console.log(error);
            simpleAlertHandler();
        })

}

//Outra forma
// export const config = {
//     API: "jfndkfj",
// }