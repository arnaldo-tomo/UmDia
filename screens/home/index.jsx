import { TouchableOpacity, View, Text, Button, SafeAreaView, TextInput, ScrollView } from "react-native"
import { HomePageStyle } from "./style"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { DEFAULT_COLOR, LIGHT, PRIMARY_COLOR, SECUNDARY_COLOR, SPANCING, BORDER, BLACK } from "../../config/themas";
import { categories, workoutPlans, workouts } from "../../data";
export const HomePage = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: BLACK, flex: 1, overflow: "hidden", }}>
            <SafeAreaView >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, padding: 20, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/main.png')} style={{ width: 40, height: 40, borderRadius: 50 }} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ marginLeft: 8, color: "#FFF" }}>Hello,Welcame</Text>
                            <Text style={{ fontWeight: "bold", marginLeft: 8, color: "#FFF" }}>Arnaldo Tomo</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ borderRadius: SPANCING, backgroundColor: SECUNDARY_COLOR, borderWidth: 1, padding: SPANCING - 5, borderColor: BORDER, opacity: 0.9, }}>
                        <Ionicons name="notifications-outline" size={25} color={'white'} />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: SECUNDARY_COLOR, flexDirection: 'row', padding: SPANCING, justifyContent: "space-between", marginLeft: SPANCING, marginRight: SPANCING, borderRadius: SPANCING }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="search-outline" size={25} color={LIGHT} />
                        <TextInput placeholder="Seacrh WorkOuts" placeholderTextColor={LIGHT} style={{ marginLeft: SPANCING, color: "#FFF", }} />
                    </View>

                    <TouchableOpacity style={{ backgroundColor: PRIMARY_COLOR, borderRadius: SPANCING - 5 }}>
                        <Ionicons name="options" size={25} color={BLACK} style={{ padding: 4 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: SPANCING * 2, paddingHorizontal: SPANCING }}>
                    <Text style={{ padding: SPANCING, color: SECUNDARY_COLOR, backgroundColor: PRIMARY_COLOR, borderRadius: SPANCING, fontWeight: "bold" }}>ALL</Text>
                    {categories.map((dado) =>
                        <TouchableOpacity key={dado.id} >
                            <ScrollView horizontal>
                                <View style={{ backgroundColor: SECUNDARY_COLOR, borderRadius: SPANCING, padding: 4 }}>
                                    <Text key={dado.id} style={{ padding: 4, color: LIGHT, fontWeight: "700" }}>{dado.name}</Text>
                                </View>
                            </ScrollView>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPANCING * 2, paddingVertical: SPANCING }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: LIGHT }}>Featured Workouts</Text>
                    <Text style={{ fontWeight: '500', color: PRIMARY_COLOR }}>Sell all</Text>
                </View>

                <ScrollView horizontal>
                    {workouts.map((data) =>
                        <TouchableOpacity key={data.id} onPress={() => navigation.navigate('OverView', data)} style={{ marginLeft: SPANCING * 2, backgroundColor: SECUNDARY_COLOR, borderRadius: SPANCING }}>
                            <View style={{ width: 250, height: 150, }}>
                                <Image source={data.image} style={{ width: 250, height: 150, borderTopLeftRadius: SPANCING, borderTopRightRadius: SPANCING }} />
                            </View>
                            <View style={{ justifyContent: "space-between", alignItems: 'center', flexDirection: 'row', padding: SPANCING }}>
                                <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 16 }}>{data.name}</Text>
                                <Text style={{ color: LIGHT, fontWeight: '500', fontSize: 16, marginLeft: SPANCING }}> <Ionicons name="star" size={20} color="yellow" style={{ marginLeft: SPANCING }} />{data.rating}.0</Text>
                            </View>
                            <View style={{ marginLeft: SPANCING, marginBottom: SPANCING }}>
                                <Text style={{ color: LIGHT, fontWeight: '500', fontSize: 15 }}>{data.coach}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPANCING * 2, paddingVertical: SPANCING }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: LIGHT }}>Trending Plans</Text>
                    <Text style={{ fontWeight: '500', color: PRIMARY_COLOR }}>Sell all</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    {workoutPlans.map((data) =>
                        <TouchableOpacity key={data.id} style={{ backgroundColor: SECUNDARY_COLOR, borderRadius: SPANCING, marginLeft: SPANCING * 2, }}>
                            <View style={{ width: 320, height: 120, padding: SPANCING, flexDirection: 'row', }}>
                                <Image source={data.image} style={{ width: 120, height: 100, padding: SPANCING * 2, borderRadius: SPANCING }} />

                                <View style={{ marginLeft: SPANCING, alignItems: 'center', alignItems: 'flex-start' }}>

                                    <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 16, }}>{data.name}</Text>

                                    <View style={{ flexDirection: 'row', alignItems: "center", paddingTop: SPANCING }}>
                                        <Ionicons name="calendar" size={16} color="#FFF" style={{ marginRight: SPANCING, }} />
                                        <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 16 }}>{data.duration} | {data.location}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: "center", paddingTop: SPANCING }}>
                                        <Ionicons name="star" size={16} color="yellow" style={{ marginRight: SPANCING, }} />
                                        <Ionicons name="star" size={16} color="yellow" style={{ marginRight: SPANCING, }} />
                                        <Ionicons name="star" size={16} color="yellow" style={{ marginRight: SPANCING, }} />
                                        <Ionicons name="star" size={16} color="yellow" style={{ marginRight: SPANCING, }} />
                                        <Text style={{ color: LIGHT, fontWeight: '500', fontSize: 16, marginLeft: SPANCING }}>{data.rating}.0</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </SafeAreaView >
        </View >
    )
}