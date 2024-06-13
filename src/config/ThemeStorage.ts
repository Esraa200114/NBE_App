import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: { mode: string; }) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error: any) {
        console.error(`Error storing data with key "${key}": ${error.message}`);
    }
}

export const fetchData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error: any) {
        console.error(`Error fetching data with key "${key}": ${error.message}`);
    }
}
