import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { register } from "./style";
import { Formik } from 'formik';
import { Validacao } from "./validacao";
import { promax } from "../../../config/api";
export default function Register({ navigation }) {

    return (
        <Formik initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}

            onSubmit={values => promax(values)} validationSchema={Validacao}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={register.container}>
                    <Image
                        source={require("../../../assets/tabnine-logo.png")}
                        style={register.logo}
                    />

                    <TextInput placeholder="Nome" style={register.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        autoFocus={true} blurOnSubmit={true}
                    />
                    {errors.name && <Text style={register.error}>{errors.name}</Text>}

                    <TextInput placeholder="Email" style={register.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email} />
                    {errors.email && <Text style={register.error}>{errors.email}</Text>}


                    <TextInput placeholder="Password" style={register.input}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password} secureTextEntry />
                    {errors.password && <Text style={register.error}>{errors.password}</Text>}


                    <TextInput placeholder="Confirme sua  Password" style={register.input}
                        onChangeText={handleChange('password_confirmation')}
                        onBlur={handleBlur('password_confirmation')}
                        value={values.password_confirmation} secureTextEntry />
                    {errors.password_confirmation && <Text style={register.error}>{errors.password_confirmation}</Text>}

                    <TouchableOpacity style={register.bttun} onPress={handleSubmit} >
                        <Text style={register.btn}>Registar</Text>
                    </TouchableOpacity>


                    <View style={register.LineCol}>
                        <Text style={register.lineLeft}></Text>
                        <Text style={register.LineText}>Or</Text>
                        <Text style={register.lineRight}></Text>
                    </View>
                    <Text>Registar com redes socias</Text>
                    <TouchableOpacity style={register.redes}>
                        <Image source={require("../../../assets/google.png")} />
                        <Image
                            style={register.apple}
                            source={require("../../../assets/apple.png")}
                        />
                        <Image source={require("../../../assets/facebook.png")} />
                    </TouchableOpacity>
                    <View style={register.jatesb}>
                        <Text>Ja Tens uma conta.?</Text>
                        <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
                            <Text style={register.textLogin}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            }
        </Formik >
    );
}
