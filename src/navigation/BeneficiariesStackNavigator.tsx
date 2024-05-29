import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import BeneficiariesListPage from '../components/pages/BeneficiariesListPage';
import BeneficiaryTransactionsHistoryPage from '../components/pages/BeneficiaryTransactionsHistoryPage';
import BeneficiariesFormPage from '../components/pages/BeneficiariesFormPage';

export type Beneficiary = {
    id: number,
    image: any,
    firstName: string,
    lastName: string,
    bankBranch: string,
    accountNumber: string,
    phoneNumber: string,
    email: string
}

export type BeneficiariesStackParamList = {
    BeneficiariesList: {
        beneficiaries: Beneficiary[];
        onDeleteBeneficiary: (id: number) => void;
        onEditBeneficiary: (beneficiary: Beneficiary) => void;
        onShowBeneficiaryTransactionHistory: (beneficiary: Beneficiary) => void
    },
    BeneficiaryDetailsForm: {
        beneficiary: Beneficiary
    },
    BeneficiaryTransactionsHistory: { beneficiary: Beneficiary }
};

const Stack = createNativeStackNavigator<BeneficiariesStackParamList>()

const BeneficiariesStackNavigator = () => {

    const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([])

    const addBeneficiary = (beneficiary: Beneficiary) => {
        setBeneficiaries((prevBeneficiaries) => [...prevBeneficiaries, beneficiary]);
        console.log("Beneficiary added!");
    };

    const editBeneficiary = (updatedBeneficiary: Beneficiary) => {
        setBeneficiaries((prevBeneficiaries) =>
            prevBeneficiaries.map(prevBeneficiary =>
                prevBeneficiary.id === updatedBeneficiary.id ? updatedBeneficiary : prevBeneficiary
            )
        );
        console.log("Beneficiary edited!");
    };

    const deleteBeneficiary = (beneficiaryID: number) => {
        setBeneficiaries((prevBeneficiaries) => prevBeneficiaries.filter(beneficiary => beneficiary.id !== beneficiaryID));
        console.log("Beneficiary deleted!");
    };

    return (
        <Stack.Navigator initialRouteName="BeneficiariesList">
            <Stack.Screen name='BeneficiariesList' options={{ headerShown: false }}>
                {(props) => (
                    <BeneficiariesListPage
                        {...props}
                        beneficiaries={beneficiaries}
                        onDeleteBeneficiary={deleteBeneficiary}
                        onEditBeneficiary={(beneficiary: Beneficiary) => (
                            props.navigation.push('BeneficiaryDetailsForm', { beneficiary })
                        )}
                        onShowBeneficiaryTransactionHistory={(beneficiary: Beneficiary) => (
                            props.navigation.push('BeneficiaryTransactionsHistory', { beneficiary })
                        )}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name='BeneficiaryDetailsForm' options={{ headerShown: false }}>
                {(props) => (
                    <BeneficiariesFormPage
                        {...props}
                        onAddBeneficiary={addBeneficiary}
                        onEditBeneficiary={editBeneficiary}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name='BeneficiaryTransactionsHistory' component={BeneficiaryTransactionsHistoryPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default BeneficiariesStackNavigator
