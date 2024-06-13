import AsyncStorage from "@react-native-async-storage/async-storage";

const REMEMBER_ME_KEY = 'remember_me';

type RememberMeData = {
    userName: string;
    password: string;
};

export const saveRememberMe = async (value: RememberMeData) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(REMEMBER_ME_KEY, jsonValue);
    } catch (error: any) {
        console.error("Error saving remember me data: ", error.message);
    }
}

export const getRememberMe = async (): Promise<RememberMeData | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(REMEMBER_ME_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error: any) {
        console.error("Error getting remember me data: ", error.message);
        return null;
    }
}

export const removeRememberMe = async () => {
    try {
        await AsyncStorage.removeItem(REMEMBER_ME_KEY);
    } catch (error: any) {
        console.error("Error removing remember me data: ", error.message);
    }
}
