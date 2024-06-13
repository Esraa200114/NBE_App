import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGGED_IN_KEY = 'logged_in';

type LoggedInData = {
    userName: string;
    mobileNumber: string;
};

export const saveLoggedIn = async (value: LoggedInData) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(LOGGED_IN_KEY, jsonValue);
    } catch (error: any) {
        console.error("Error saving logged-in data: ", error.message);
    }
}

export const getLoggedIn = async (): Promise<LoggedInData | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(LOGGED_IN_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error: any) {
        console.error("Error getting logged-in data: ", error.message);
        return null;
    }
}

export const removeLoggedIn = async () => {
    try {
        await AsyncStorage.removeItem(LOGGED_IN_KEY);
    } catch (error: any) {
        console.error("Error removing logged-in data: ", error.message);
    }
}
