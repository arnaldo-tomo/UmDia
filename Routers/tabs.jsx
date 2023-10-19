import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import { CommonActions } from "@react-navigation/native";
const { width, height } = Dimensions.get('screen');

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from "@expo/vector-icons";

import { HomePage } from '../screens/home';
import { BLACK, LIGHT, PRIMARY_COLOR, SECUNDARY_COLOR } from '../config/themas';
import { style } from './style';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator

            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: PRIMARY_COLOR,
                tabBarInactiveTintColor: BLACK,
                tabBarStyle: {
                    backgroundColor: '#1F212C',
                    color: "#FFF",
                    bottom: 20,
                    borderRadius: 20,
                    marginRight: 10,
                    marginLeft: 10,
                    overflow: 'hidden',
                    position: 'absolute'
                }
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (

                <BottomNavigation.Bar

                    activeColor={LIGHT}
                    inactiveColor={PRIMARY_COLOR}
                    style={style.tabBar}
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
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: style.home,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={BLACK} />;

                        } else {
                            return <Ionicons name="home-outline" size={size} color={LIGHT} />;

                        }

                    },
                }}
            />
            <Tab.Screen
                name="Users"
                component={Users}
                options={{
                    tabBarLabel: 'Coach',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {

                            return <Ionicons name="people" size={size} color={BLACK} />;
                        } else {

                            return <Ionicons name="people-outline" size={size} color={LIGHT} />;
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarLabel: 'Calendar',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {

                            return <Ionicons name="calendar" size={size} color={BLACK} />;
                        } else {

                            return <Ionicons name="calendar-outline" size={size} color={LIGHT} />;
                        }
                    },
                }}
            />
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {

                            return <Ionicons name="person" size={size} color={BLACK} />;
                        } else {

                            return <Ionicons name="person-outline" size={size} color={LIGHT} />;
                        }
                    },
                }}
            />
        </Tab.Navigator >
    );
}



function Calendar() {
    return (
        <View style={{ backgroundColor: BLACK, width: width, height: height }} styles={styles.container}>
            <StatusBar style='light' StatusBarAnimation='slide' translucent={true} />
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
}
function Users() {
    return (
        <View style={{ backgroundColor: BLACK, width: width, height: height }}>
            <StatusBar style='light' StatusBarAnimation='slide' translucent={true} />
            <Text variant="headlineMedium">Settings!</Text>
        </View>
    );
}
function SettingsScreen() {
    return (
        <View style={{ backgroundColor: BLACK, width: width, height: height }}>
            <StatusBar style='light' StatusBarAnimation='slide' translucent={true} />
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