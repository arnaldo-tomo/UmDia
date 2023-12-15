import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { PRIMARY_COLOR, SECUNDARY_COLOR } from "../config/themas";
export default function Plus() {
    return (
        <TouchableOpacity onPress={() => { Alert.alert('finger-print-outline') }} style={{
            backgroundColor: PRIMARY_COLOR, borderRadius: 24, alignContent: 'center', height: 60, width: 60,
            justifyContent: 'center', alignItems: 'center', elevation: 10, bottom: 10,
        }}>
            <Ionicons name="finger-print" color={SECUNDARY_COLOR} size={50} />
        </TouchableOpacity>
    )
}