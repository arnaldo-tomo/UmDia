@ -1, 86 + 0, 0 @@
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation, PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {
    return (

        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Feed"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>


    );
}

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
}
function Profile() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
