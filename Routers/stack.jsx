import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../screens/auth/login';
import Register from "../screens/auth/register";
import ForgetPassword from "../screens/auth/forget";
import Inicio from '../screens/inicio';
import Tabs from './tabs';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {

    return (
        <PaperProvider>
            <NavigationContainer >
                <Stack.Navigator>
                    <Stack.Screen name="LoginScreen" component={login} options={{ headerShown: false }} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="Inicio" component={Tabs} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
