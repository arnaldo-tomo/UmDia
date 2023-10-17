import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground, ScrollView, Image, FlatList, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { BLACK, BORDER, LIGHT, SECUNDARY_COLOR, SPANCING, PRIMARY_COLOR } from "../../config/themas";
import { BlurView } from "expo-blur";
import { exercises, workoutPlans } from "../../data";
const { height, width } = Dimensions.get('screen')
export const OverView = ({ route, navigation }) => {

    const { id, name, coach, image, rating, minutes, calories, description, } = route.params;
    return (
        <SafeAreaView style={{ backgroundColor: BLACK, width: width, height: height }}>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', padding: SPANCING, paddingTop: SPANCING * 4, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: SECUNDARY_COLOR, borderRadius: SPANCING, borderColor: BORDER, padding: SPANCING, borderWidth: 1 }}>
                    <Ionicons name="chevron-back" size={20} color={LIGHT} />
                </TouchableOpacity>
                <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 15 }}>Plan OverView</Text>
                <Ionicons name="arrow-forward" size={20} color={BLACK} />
            </View>
            <ScrollView >
                <ImageBackground source={image} style={{
                    width: 340, height: 250,
                    padding: SPANCING, borderTopRightRadius: SPANCING,
                    borderTopLeftRadius: SPANCING, marginLeft: SPANCING,
                    marginBottom: SPANCING, marginTop: SPANCING * 2,
                    overflow: "hidden",
                }}>

                    <TouchableOpacity style={{ padding: SPANCING, borderRadius: SPANCING, backgroundColor: SECUNDARY_COLOR, width: 40, alignSelf: 'flex-end' }} >
                        <Ionicons name="bookmark-outline" color={LIGHT} size={20} />
                    </TouchableOpacity>
                    <View style={{
                        padding: SPANCING,
                        top: SPANCING * 12, height: 50,
                        borderRadius: SPANCING, flexDirection: 'row',
                        justifyContent: 'space-between', overflow: 'hidden', alignItems: 'center'
                    }}>


                    </View>
                </ImageBackground>
                <View style={{ paddingHorizontal: SPANCING * 1, paddingVertical: SPANCING }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", alignContent: 'center', justifyContent: "space-between" }}>
                        <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 20 }}>{name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", paddingHorizontal: SPANCING, alignContent: 'center' }}>
                            <Ionicons name="star" size={16} color="yellow" />
                            <Text style={{ color: LIGHT, fontWeight: '500', fontSize: 16, marginLeft: SPANCING }}>{rating}.0</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: LIGHT, fontSize: 15 }}>{coach}</Text>
                    </View>
                    <View style={{ marginTop: SPANCING }}>
                        <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 18 }}>Description</Text>
                        <Text style={{ color: LIGHT, fontSize: 15 }}>{description}</Text>
                    </View>

                    <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 20, marginBottom: SPANCING, marginTop: SPANCING }} >Exercises ({exercises.length})</Text>
                    {exercises.map((workoutPlans) =>
                        <TouchableOpacity key={workoutPlans.id} style={{
                            backgroundColor: SECUNDARY_COLOR, width: 330, height: 100,
                            paddingVertical: SPANCING,
                            paddingVertical: SPANCING,
                            padding: SPANCING,
                            borderRadius: SPANCING,
                            marginBottom: SPANCING,
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: "center", marginBottom: SPANCING * 5 }}>
                                <Image source={workoutPlans.image} style={{ backgroundColor: SECUNDARY_COLOR, width: 100, height: 80, borderRadius: SPANCING }} />
                                <View style={{ marginLeft: SPANCING, alignContent: 'center', alignContent: 'center' }}>
                                    <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 15, marginBottom: 4 }} >{workoutPlans.name}</Text>
                                    <Text style={{ color: LIGHT, marginBottom: 4, fontWeight: '500' }} ><Ionicons name="time-outline" size={19} color={LIGHT} /> {workoutPlans.time}/{workoutPlans.set} set</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ backgroundColor: PRIMARY_COLOR, padding: 4, borderRadius: SPANCING * 2 }}>
                                            <Ionicons name="play" color={BLACK} />
                                        </View>
                                        <Text style={{ color: LIGHT, fontWeight: '500' }}>  Play</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity style={{ position: 'absolute', bottom: 10, backgroundColor: PRIMARY_COLOR, width: width * .95, marginLeft: SPANCING, borderRadius: SPANCING }}>

                <Text style={{ color: BLACK, fontWeight: 'bold', fontSize: 18, textAlign: 'center', padding: SPANCING * 1 }}>
                    Start Workouts
                </Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}