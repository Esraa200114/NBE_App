import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import ConfirmationCodePage from '../components/pages/ConfirmationCodePage';
import TransferInfoPage from '../components/pages/TransferInfoPage';

export type TransferStackParamList = {
    TransferInfo: undefined,
    ConfirmationCode: { mobileNumber: string, title: string },
};

const Stack = createNativeStackNavigator<TransferStackParamList>()

const TransferStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="TransferInfo">
            <Stack.Screen name='TransferInfo' component={TransferInfoPage} options={{ headerShown: false }} />
            <Stack.Screen name='ConfirmationCode' component={ConfirmationCodePage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default TransferStackNavigator
