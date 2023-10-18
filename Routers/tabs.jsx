import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import { CommonActions } from "@react-navigation/native";

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from "@expo/vector-icons";

import { HomePage } from '../screens/home';
import { BLACK, LIGHT } from '../config/themas';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    style={{ backgroundColor: '#1F212C' }}
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.title;

                        return label;
                    }}

                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="home-outline" size={size} color={BLACK} />;

                    },
                }}
            />
            <Tab.Screen
                name="Users"
                component={Users}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="people-outline" size={size} color={LIGHT} />;
                    },
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="calendar-outline" size={size} color={LIGHT} />;
                    },
                }}
            />
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person-outline" size={size} color={LIGHT} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}



function Calendar() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
}
function Users() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Settings!</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});