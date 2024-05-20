import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BeneficiariesListPage from '../components/pages/BeneficiariesListPage';
import BeneficiariesFormPage from '../components/pages/BeneficiariesFormPage';
import BeneficiaryTransactionsHistoryPage from '../components/pages/BeneficiaryTransactionsHistoryPage';

export type BeneficiariesStackParamList = {
    BeneficiariesList: undefined,
    BeneficiaryDetailsForm: {
        image: any,
        firstName: string,
        lastName: string,
        bankBranch: string,
        accountNumber: string,
        phoneNumber: string,
        email: string
    },
    BeneficiaryTransactionsHistory: { beneficiaryID: number }
};

const Stack = createNativeStackNavigator<BeneficiariesStackParamList>()

const BeneficiariesStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="BeneficiariesList">
            <Stack.Screen name='BeneficiariesList' component={BeneficiariesListPage} options={{ headerShown: false }} />
            <Stack.Screen name='BeneficiaryDetailsForm' component={BeneficiariesFormPage} options={{ headerShown: false }} />
            <Stack.Screen name='BeneficiaryTransactionsHistory' component={BeneficiaryTransactionsHistoryPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default BeneficiariesStackNavigator
