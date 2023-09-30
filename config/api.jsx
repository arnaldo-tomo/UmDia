export const API_URL = "http://192.168.79.54:8084/";

// export const config = {
//     API: "jfndkfj",
// }


export const promax = (values) => {
    axios.post(API_URL + 'api/register/', {
        name: values.name,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
    })
        .then(function (response) {
            const objetoSerializado = JSON.stringify(response.data);
            AsyncStorage.setItem('token', objetoSerializado);
        })
        .catch(function (error) {
            console.log(error);
            simpleAlertHandler();
        })
}