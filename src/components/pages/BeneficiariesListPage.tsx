import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

// Screens
import BeneficiariesListScreen from '../templates/BeneficiariesListScreen'

// Navigation
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

type BeneficiariesListPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiariesList">
    & {
        beneficiaries: Beneficiary[];
        onDeleteBeneficiary: (id: number) => void;
        onEditBeneficiary: (beneficiary: Beneficiary) => void;
        onShowBeneficiaryTransactionHistory: (beneficiary: Beneficiary) => void
    };

const BeneficiariesListPage = ({ navigation, beneficiaries, onDeleteBeneficiary, onEditBeneficiary, onShowBeneficiaryTransactionHistory }: BeneficiariesListPageProps) => {

    return (
        <BeneficiariesListScreen navigation={navigation}
            beneficiaries={beneficiaries}
            onDeleteBeneficiary={onDeleteBeneficiary}
            onEditBeneficiary={onEditBeneficiary}
            onShowTransactions={onShowBeneficiaryTransactionHistory}
        />
    )
}

export default BeneficiariesListPage
