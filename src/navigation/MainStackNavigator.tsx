import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import ConfirmationCodePage from '../components/pages/ConfirmationCodePage';
import LoginPage from '../components/pages/LoginPage';
import MobileNumberPage from '../components/pages/MobileNumberPage';
import PasswordPage from '../components/pages/PasswordPage';
import SplashPage from '../components/pages/SplashPage';
import SuccessPage from '../components/pages/SuccessPage';
import DrawerPage from '../components/pages/DrawerPage';

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Drawer: undefined,
    MobileNumber: undefined,
    ConfirmationCode: { mobileNumber: string, title: string },
    Password: undefined,
    Success: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name='Splash' component={SplashPage} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name='Drawer' component={DrawerPage} options={{ headerShown: false }} />
            <Stack.Screen name='MobileNumber' component={MobileNumberPage} options={{ headerShown: false }} />
            <Stack.Screen name='ConfirmationCode' component={ConfirmationCodePage} options={{ headerShown: false }} />
            <Stack.Screen name='Password' component={PasswordPage} options={{ headerShown: false }} />
            <Stack.Screen name='Success' component={SuccessPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator
