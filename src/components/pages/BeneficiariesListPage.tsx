import React from 'react'
import BeneficiariesListScreen from '../templates/BeneficiariesListScreen'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BeneficiariesStackParamList, Beneficiary } from '../../navigation/BeneficiariesStackNavigator'

type BeneficiariesListPageProps = NativeStackScreenProps<BeneficiariesStackParamList, "BeneficiariesList">
    & {
        beneficiaries: Beneficiary[];
        onDeleteBeneficiary: (id: number) => void;
        onEditBeneficiary: (beneficiary: Beneficiary) => void;
    };

const BeneficiariesListPage = ({ navigation, beneficiaries, onDeleteBeneficiary, onEditBeneficiary }: BeneficiariesListPageProps) => {

    return (
        <BeneficiariesListScreen navigation={navigation}
            beneficiaries={beneficiaries}
            onDeleteBeneficiary={onDeleteBeneficiary}
            onEditBeneficiary={onEditBeneficiary}
        />
    )
}

export default BeneficiariesListPage
