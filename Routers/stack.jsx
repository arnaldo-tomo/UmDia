import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../screens/auth/login';
import Register from "../screens/auth/register";
import ForgetPassword from "../screens/auth/forget";
import { Onboarding } from '../screens/onboarding';
import Tabs from './tabs';
import { OverView } from '../screens/overview';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {

    return (

        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="OverView" component={OverView} options={{ headerShown: false }} />
                <Stack.Screen name="Boarding" component={Onboarding} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={login} options={{ headerShown: false }} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

