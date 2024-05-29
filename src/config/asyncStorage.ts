import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: { mode: string; }) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch ({ message }: any) {
        Alert.alert(message)
    }
}

export const fetchData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch ({ message }: any) {
        Alert.alert(message)
    }
}