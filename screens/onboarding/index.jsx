import { Dimensions, ImageBackground, SafeAreaView, Text, Button, View, TouchableOpacity } from "react-native"
import { LinearGradient } from "react-native-svg"
import { LIGHT, PRIMARY_COLOR, SPANCING, BLACK } from "../../config/themas"
import { StatusBar } from "expo-status-bar"
const { height, width } = Dimensions.get('screen')
export const Onboarding = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style='light' StatusBarAnimation='slide' translucent={true} />
            <ImageBackground resizeMode="cover" style={{ width: width, height: height }} source={require('../../assets/images/onboarding.jpeg')}>

                <View style={{ bottom: 20, position: 'absolute', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', marginBottom: SPANCING * 3, alignItems: 'center', textAlign: 'center' }}>
                        <Text style={{ fontWeight: "900", fontSize: 35, color: LIGHT, justifyContent: 'center', textAlign: 'center' }}>
                            Stay health even if you stay at home </Text>
                        <Text style={{ fontWeight: "500", fontSize: 15, color: LIGHT, justifyContent: 'center', textAlign: 'center', padding: SPANCING * 2 }}>
                            Staying fit to keep you in good condition can now go through mobile
                            apps
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.push('Tabs')} style={{
                        backgroundColor: PRIMARY_COLOR, padding: SPANCING,
                        borderRadius: SPANCING, width: 340, height: 50,
                        alignItems: 'center', justifyContent: 'center',
                        marginLeft: SPANCING, marginRight: SPANCING
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }} >Get Started</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground >
        </View >
    )
}