import React, { useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import BeneficiariesListPage from '../components/pages/BeneficiariesListPage';
import BeneficiaryTransactionsHistoryPage from '../components/pages/BeneficiaryTransactionsHistoryPage';
import BeneficiariesFormPage from '../components/pages/BeneficiariesFormPage';
import Toast from 'react-native-toast-message';
import { ThemeContext } from '../context/ThemeContext';
import { Colors } from '../../constants/Colors';

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

    const { theme } = useContext(ThemeContext)
    let activeColors = (Colors as any)[theme.mode]

    const showToast = (toast: string, backgroundColor: string) => {
        Toast.show({
            type: 'customToast',
            text1: toast,
            text1Style: {
                fontFamily: 'Roboto Bold',
                color: 'activeColors.PureWhite',
                fontSize: 14,
                textAlign: 'left'
            },
            props: { backgroundColor: backgroundColor },
            topOffset: 2,
            visibilityTime: 3000
        });
    };

    const addBeneficiary = (beneficiary: Beneficiary) => {
        setBeneficiaries((prevBeneficiaries) => [...prevBeneficiaries, beneficiary]);
        showToast("Beneficiary added!", activeColors.SpringGreen);
    };

    const editBeneficiary = (updatedBeneficiary: Beneficiary) => {
        setBeneficiaries((prevBeneficiaries) =>
            prevBeneficiaries.map(prevBeneficiary =>
                prevBeneficiary.id === updatedBeneficiary.id ? updatedBeneficiary : prevBeneficiary
            )
        );
        showToast("Beneficiary edited!", activeColors.SkyBlue);
    };

    const deleteBeneficiary = (beneficiaryID: number) => {
        setBeneficiaries((prevBeneficiaries) => prevBeneficiaries.filter(beneficiary => beneficiary.id !== beneficiaryID));
        showToast("Beneficiary deleted!", activeColors.VividRed);
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
